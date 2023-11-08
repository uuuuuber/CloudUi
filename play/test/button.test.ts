// const add = require('./button.vue')
const buttonClickTest = require('./add');
// import add from './button.vue'

test('按钮事件成功', () => {
  expect(buttonClickTest('按钮事件成功')).toBe('按钮事件成功');
});