# Image Lazy Loading

基本上有三种方式用来处理图片懒加载

1. 使用Web原生提供的`img`标签上面的`loading`属性
2. 自定义scroll事件处理，根据检测图片和Viewport的相对位置来决定是否加载（通过设置`src`/`srcset`属性）
3. 使用Web提供的Intersection Observers API，它能帮忙检测一个element是否出现/离开Viewport

其他相关资源

* [Lazy loading images | web.dev](https://web.dev/articles/lazy-loading-images)
* [MDN](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading) 关于Lazy Loading的介绍
