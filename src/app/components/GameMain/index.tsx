import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deX, deY } from '../../constants';
import Logo from '../Logo';
import * as WindowActions from '../../actions/window';
import * as GameActions from '../../actions/game';
import { IGame, ISize, ISnake, IDirection, IFood } from '../../type/ReducerType';
import './style.less';

interface IGameMainProps {
  actions?: any;
  size?: ISize;
  snake?: ISnake;
  food?: IFood;
  direction?: IDirection;
  game?: IGame;
}

interface IGameMainState {
  showFood?: boolean;
  start?: Array<IStartNode>;
}

interface IStartNode {
  x?: number;
  y?: number;
  de?: number;
  pm?: number;
  index?: number;
}

@connect(
  state => ({
    size: state.size,
    snake: state.snake.get('snake'),
    food: state.food.get('food'),
    direction: state.direction,
    game: state.game
  }),
  dispatch => ({
    actions: bindActionCreators(
      {
        ...WindowActions,
        ...GameActions
      },
      dispatch
    )
  })
)

export default class GameMain extends React.Component<
  IGameMainProps,
  IGameMainState
> {
  timer = null;
  foodTimer = null;
  startTimer = null;
  constructor(props: IGameMainProps) {
    super(props);
    const column = props.size.get('column');
    this.state = {
      showFood: true,
      start: [{x: column - 1, y: 0, de: 0, pm: 1, index: 1}],
    };
  }
  handleResize = () => {
    const height = document.getElementById('left').clientHeight;
    const width = document.getElementById('left').clientWidth;
    const row = Math.floor((width - 15) / 16) + 1;
    const column = Math.floor((height - 15) / 16) + 2;
    this.setState({start: [{x: column - 1, y: 0, de: 0, pm: 1, index: 1}]});
    this.props.actions.resetSize({ column: column, row: row });
    setTimeout(() => {
      this.props.actions.setFood();
      this.props.actions.initSnack();
    }, 0);
  }
  getSnakePosition = ({x, y}: IStartNode) => {
    return { transform: `translate(${y * 16}px, ${x * 16}px)` };
  }
  startGame = () => {
    if (this.timer ) { clearInterval(this.timer); }
    if (this.foodTimer ) { clearInterval(this.foodTimer); }
    this.timer = setInterval(this.goNext, 500);
    this.foodTimer = setInterval(this.setFoodShowOrHide, 200);
  }
  isDead({x, y}: {x: number, y: number}) {
    const { game, size } = this.props;
    const column = size.get('column');
    const row = size.get('row');
    if (game.get('modal') === 1 && (x === 0 || y === 0 || x === column || y === row) ) {
      return true;
    }
    const snake = this.props.snake.toJS();
    return snake.filter(item => item.x === x && item.y === y).length !== 0;
  }
  isInSnake({x, y}: {x: number, y: number}) {
    return this.state.start.filter(item => item.x === x && item.y === y).length !== 0;
  }
  dead = () => {
    this.props.actions.endGame();
    this.props.actions.setGameInit(-1);
    this.props.actions.initSnack();
    this.startTimer = setInterval(this.renderInit, 10);
  }
  goNext = () => {
    const { snake, direction, food } = this.props;
    const currentSnake = snake.toJS();
    const currentFood = food.toJS();
    let next = this.getNext(currentSnake[0], direction.get('snake'));
    if (this.isDead(next)) {
      this.dead();
      clearInterval(this.timer);
      clearInterval(this.foodTimer);
      return;
    }
    currentSnake.unshift(next);
    if (next.x !== currentFood.x || next.y !== currentFood.y) {
      currentSnake.pop();
    } else {
      this.props.actions.getCode();
      this.props.actions.setFood();
    }
    this.props.actions.setSnack(currentSnake);
  }
  getNext = (node: {x: number, y: number}, direction) => {
    const { size, game } = this.props;
    const column = size.get('column');
    const row = size.get('row');
    let x = node.x + deX[direction];
    let y = node.y + deY[direction];
    if (game.get('modal') === 1) {
      return { x, y };
    }
    if (x >= column) { x = 0; }
    if (y >= row) { y = 0; }
    if (x < 0) { x = column - 1; }
    if (y < 0) { y = row - 1; }
    return { x, y };
  }
  setFoodShowOrHide = () => {
    this.setState({ showFood: !this.state.showFood});
  }
  getNewStartXY = (start) => {
    const size = this.props.size;
    const column = size.get('column');
    const row = size.get('row');
    let next: IStartNode = {};
    const { x, y, de, pm, index } = start;
    next.x = de === 1 ? x + pm : x;
    next.y = de === 0 ? y + pm : y;
    next.de = de;
    next.pm = pm;
    next.index = index;
    if (next.x === column - index - 1 && next.y === index - 1 && next.x !== Math.floor(column / 2) && next.y !== Math.floor(row / 2)) {
      next.index += 1;
    }
    if (de === 0 && (next.y === row - next.index || (next.y === next.index - 1 && next.x === index - 1))) {
      next.de = 1;
    }
    if (de === 1 && (next.x === column - next.index || next.x === next.index - 1)) {
      next.de = 0;
    }
    if (next.y === row - next.index && next.x === column - next.index) {
      next.pm = -1;
    }
    if (next.y === next.index - 1 && next.x === next.index - 1) {
      next.pm = 1;
    }
    if (this.isInSnake({x: next.x, y: next.y}) && this.props.game.get('init') === -1) {
      this.props.actions.setGameInit(0);
      if (this.startTimer) { clearInterval(this.startTimer); };
    }
    return next;
  }
  renderInit = () => {
    let start = this.state.start;
    const length = start.length;
    // 计算开始动画的下一个节点
    const nextXY = this.getNewStartXY(start[length - 1]);
    start.push(nextXY);
    this.setState({ start });
  }
  resetStart = () => {
    const column = this.props.size.get('column');
    if (this.props.game.get('modal') === 1) {
      this.setState({ start: [{x: column - 1, y: 1, de: 0, pm: 1, index: 2}] });
    } else {
     this.setState({ start: [{x: column - 1, y: 0, de: 0, pm: 1, index: 1}] });
    }
    this.forceUpdate();
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    // 播放开始动画
    this.startTimer = setInterval(this.renderInit, 10);
  }
  componentWillReceiveProps(nextProps: IGameMainProps) {
    if (nextProps.game.get('start') && !this.props.game.get('start')) {
      // if (nextProps.game.get('modal') === 1) {
      //   this.setState({ start: [{x: column - 1, y: 1, de: 0, pm: 1, index: 2}] });
      // } else {
      //  this.setState({ start: [{x: column, y: 0, de: 0, pm: 1, index: 1}] });
      // }
      this.startGame();
    }
    if (nextProps.game.get('init') !== this.props.game.get('init')) {
      this.resetStart();
    }
    if (!nextProps.game.get('start') && this.props.game.get('start')) {
      clearInterval(this.timer);
      clearInterval(this.foodTimer);
    }
    if (nextProps.game.get('pause') && !this.props.game.get('pause')) {
      clearInterval(this.timer);
      clearInterval(this.foodTimer);
    }
    if (!nextProps.game.get('pause') && this.props.game.get('pause')) {
      this.startGame();
    }
    if (nextProps.game.get('init') === -1 && this.props.game.get('init') !== -1) {
      if (this.startTimer) {
        clearInterval(this.startTimer);
      }
      this.startTimer = setInterval(this.renderInit, 10);
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    clearInterval(this.foodTimer);
    clearInterval(this.startTimer);
  }
  render() {
    const { size, snake, food, game } = this.props;
    const { showFood, start } = this.state;
    const gameInit = game.get('init');
    const gameModal = game.get('modal');
    const column = size.get('column');
    const row = size.get('row');
    return (
      <div className='left' id='left'>
        {
          /*logo*/
          (gameInit === 0 || gameInit === -2) && <Logo />
        }
        {
          /*背景*/
          [].fill.call(new Array(column), 0).map((item, i) => {
            return [].fill.call(new Array(row), 0).map((item, j) => {
              if (gameModal === 1 && (i === 0 || j === 0 || i === column - 1 || j === row - 1)) {
                return <div className='cell full-cell' key={i * row + j}></div>;
              }
              return <div className='cell' key={i * row + j}></div>;
            });
          })
        }
        {
          /*蛇*/
         gameInit === 1 && snake.map((item, i) => {
            return <div key={i} style={this.getSnakePosition(item.toJS())} className='cell snake-cell'></div>;
          })
        }
        { /*食物*/gameInit === 1 &&  <div style={this.getSnakePosition(food.toJS())} className={`cell ${showFood ? 'food-o-cell' : 'food-cell'}`}></div>}
        {
          /*初始化和失败条件下页面动画*/
          gameInit === -1 && start.map((item, i) => {
            return <div key={i} style={this.getSnakePosition(item)} className='cell snake-cell'></div>;
          })
        }
      </div>
    );
  }
}