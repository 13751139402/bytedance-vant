import Page from '../../common/page';
Page({
  onClickLeft() {
    tt.showToast({
      title: '点击返回',
      icon: 'none'
    });
  },

  onClickRight() {
    tt.showToast({
      title: '点击按钮',
      icon: 'none'
    });
  }

});