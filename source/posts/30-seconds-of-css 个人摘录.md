---
title: 30-seconds-of-css 个人摘录
date: 2018-12-10 21:57:29
sidebar: auto
categories: 分享
tags: css,30-seconds
---

# 30-seconds-of-css 个人摘录

> 以下为个人整理的一些要点，更多内容戳 [源项目](https://30-seconds.github.io/30-seconds-of-css/)
>
> [这里](https://caniuse.com/) 查询属性支持情况

## Bouncing loader

### 关键点

- **css animation**
  - [animation-name](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-name)
  - [animation-duration](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-duration)
  - [animation-timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-timing-function)
  - [animation-delay](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-delay)
  - [animation-iteration-count](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-iteration-count)
  - [animation-direction](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-direction)
  - [**animation-fill-mode**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-fill-mode)

### css

```css
@keyframes bouncing-loader {
  to {
    opacity: 0.1;
    transform: translate3d(0, -1rem, 0);
  }
}

.bouncing-loader {
  display: flex;
  justify-content: center;
}

.bouncing-loader > div {
  width: 1rem;
  height: 1rem;
  margin: 3rem 0.2rem;
  background: #11829a;
  border-radius: 50%;
  animation: bouncing-loader 0.6s infinite alternate;
}

.bouncing-loader > div:nth-child(2) {
  animation-delay: 0.2s;
}

.bouncing-loader > div:nth-child(3) {
  animation-delay: 0.4s;
}

```

### demo

<thirty-seconds-of-css-BouncingLoader/>

## Calc()

> `background-position` 也可使用 `calc()`

### css

```stylus
.box-example {
  background-position calc(100% - 20px) calc(100% - 20px)
}
```

### demo

<thirty-seconds-of-css-Calc/>

## Counter

### 关键点

- **counter-reset**

  > 标识计数器作用域 第二个参数为起始标识 默认为 0

- **content**

  > 用来生成内容 结合 `:before` `:after` 使用

- **counter-increment**

  > 标识计数器与实际相关联元素范围 第二个参数为递增标识 默认为 1

- **counters**

  > 调用定义好的计数器标识符

### css

```css
.counter-demo {
  /* counter-reset:[ <identifier> <integer>? ]+ | none | inherit */ 
  counter-reset: demo;
}

.counter-demo li::before {
  /* counters(<name>，<string>?, <list-style-type>?) */
  content: counters(demo, '.') ' - ';
  /* counter-increment:[ <identifier> <integer>? ]+ | none | inherit */ 
  counter-increment: demo;
}
```

> 更多阅读
>
> - [@counter-style](https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style)
>
> - [content](https://dev.opera.com/articles/css-generated-content-techniques/)

### demo

<thirty-seconds-of-css-Counter/>

## Custom variables

### css

```css
:root {
  /* Place variables within here to use the variables globally. */
}

.custom-variables {
  --some-color: #da7800;
  --some-keyword: italic;
  --some-size: 1.25em;
  --some-complex-value: 1px 1px 2px #fff, 0 0 1em #826a6a, 0 0 0.2em #826a6a;
  color: var(--some-color);
  font-size: var(--some-size);
  font-style: var(--some-keyword);
  text-shadow: var(--some-complex-value);
}
```

> 更多阅读
>
> [小tips:了解CSS/CSS3原生变量var](https://www.zhangxinxu.com/wordpress/2016/11/css-css3-variables-var/)

### demo

<thirty-seconds-of-css-CustomVariables/>

## Donut spinner

### css

```stylus
@keyframes donut-spin
  0% {
    transform rotate(0deg)
  }
  100% {
    transform rotate(360deg)
  }

$base
  display inline-block
  border 4px solid rgba(0, 0, 0, 0.1)
  border-left-color #8385aa
  width 2rem
  height 2rem

.donut-demo
  display flex
  justify-content space-around
  .square
    @extend $base
  .cricle
    @extend $base
    border-radius 50%
  .donut
    @extend $base
    border-radius 50%
    animation donut-spin 1.2s linear infinite
```

### demo

<thirty-seconds-of-css-DonutSpinner/>

## Dynamic shadow

### css

```css
.dynamic-shadow {
  position: relative;
  width: 10rem;
  height: 10rem;
  background: linear-gradient(75deg, #6d78ff, #00ffb8);
  z-index: 1;
}
.dynamic-shadow::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background: inherit;
  top: 0.5rem;
  filter: blur(0.4rem);
  opacity: 0.7;
  z-index: -1;
}

```

### demo

<thirty-seconds-of-css-DynamicShadow/>

## Easing variables

### css

```stylus
$ease-in-quad = cubic-bezier(0.55, 0.085, 0.68, 0.53)
$ease-in-cubic = cubic-bezier(0.55, 0.055, 0.675, 0.19)
$ease-in-quart = cubic-bezier(0.895, 0.03, 0.685, 0.22)
$ease-in-quint = cubic-bezier(0.755, 0.05, 0.855, 0.06)
$ease-in-expo = cubic-bezier(0.95, 0.05, 0.795, 0.035)
$ease-in-circ = cubic-bezier(0.6, 0.04, 0.98, 0.335)
$ease-out-quad = cubic-bezier(0.25, 0.46, 0.45, 0.94)
$ease-out-cubic = cubic-bezier(0.215, 0.61, 0.355, 1)
$ease-out-quart = cubic-bezier(0.165, 0.84, 0.44, 1)
$ease-out-quint = cubic-bezier(0.23, 1, 0.32, 1)
$ease-out-expo = cubic-bezier(0.19, 1, 0.22, 1)
$ease-out-circ = cubic-bezier(0.075, 0.82, 0.165, 1)
$ease-in-out-quad = cubic-bezier(0.455, 0.03, 0.515, 0.955)
$ease-in-out-cubic = cubic-bezier(0.645, 0.045, 0.355, 1)
$ease-in-out-quart = cubic-bezier(0.77, 0, 0.175, 1)
$ease-in-out-quint = cubic-bezier(0.86, 0, 0.07, 1)
$ease-in-out-expo = cubic-bezier(1, 0, 0, 1)
$ease-in-out-circ = cubic-bezier(0.785, 0.135, 0.15, 0.86)
```

### demo

<thirty-seconds-of-css-EasingVariables/>

## Etched text

### css

```css
.etched-text {
  text-shadow: 0 2px #6989f3;
  font-size: 1.5rem;
  font-weight: bold;
  color: #8cbef9;
}
```

### demo

<thirty-seconds-of-css-EtchedText/>

## Fit image in container

> no IE :slightly_smiling_face:
>
> [check it out](https://caniuse.com/#search=object-fit)

### 关键点

- [object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit)
- [object-position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-position)

### css

```stylus
.image 
  background #34495e
  border 1px solid #34495e
  width 200px
  height 200px

.image-cover--left
  object-fit cover
  object-position left top

$type = fill contain cover none scale-down

for t in $type
  .image-{t}
    object-fit t
    object-position center
```

### demo

<thirty-seconds-of-css-FitImageInContainer/>

## Hairline border

### 关键点

- `@media (min-resolution: ...)`

  > 分辨率
  >
  > `1dppx` = 96 DPI
  >
  > `box-shadow` px = 1 / dppx

### css

```css
.hairline-border {
  padding-left: 5px;
  box-shadow: 0 0 0 1px;
}

@media (min-resolution: 2dppx) {
  .hairline-border {
    box-shadow: 0 0 0 0.5px;
  }
}

@media (min-resolution: 3dppx) {
  .hairline-border {
    box-shadow: 0 0 0 0.33333333px;
  }
}

@media (min-resolution: 4dppx) {
  .hairline-border {
    box-shadow: 0 0 0 0.25px;
  }
}
```

> 更多阅读
>
> [@media](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries)

### demo

<thirty-seconds-of-css-HairlineBorder/>

## Height transition

> `var() `中的变量可以在 js 中重新赋值

### html

```html
<div class="trigger m-t-10">
  Hover me to see a height transition.
  <div class="more m-t-10" ref="content">more content</div>
</div>
```

### css

```css
.trigger .more {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s;
}

.trigger:hover > .more {
  max-height: var(--max-height);
}
```

### js

```javascript
const content = this.$refs.content
const height = content.scrollHeight
content.style.setProperty('--max-height', height + 'px')
/*
    附原生 js 改变 style 的三种方法
    el.style.cssText = 'width:100px;height:60px;'
    el.style.setProperty('width', '100px')
    el.style.width= '100px'
*/
```

### demo

<thirty-seconds-of-css-HeightTransition/>

## Hover underline animation

### css

```css
.hover-underline-animation {
  display: inline-block;
  position: relative;
  color: #0087ca;
}

.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #0087ca;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
```

> 更多阅读
>
> [transform-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)

### demo

<thirty-seconds-of-css-HoverUnderlineAnimation/>

## Mouse cursor gradient tracking

### html

```vue
<button class="button m-t-10" @mousemove="handleMousemove">
  <span>Hover me I'm awesome</span>
</button>
```

### css

```stylus
.button {
	position: relative;
	background: #f72359;
	padding: 1em 2em;
	border: none;
	color: white;
	font-size: 1.2em;
	cursor: pointer;
	outline: none;
	overflow: hidden;
	border-radius: 100px;
	
	span {
		position: relative;
		pointer-events: none;
	}
	
	&::before {
		--size: 0;

		content: '';
		position: absolute;
		left: var(--x);
		top: var(--y);
		width: var(--size);
		height: var(--size);
		background: radial-gradient(circle closest-side, #4405f7, transparent);
		transform: translate(-50%, -50%);
		transition: width .2s ease, height .2s ease;
	}
	
	&:hover::before {
		--size: 400px;
	}
}
```

### js

```javascript
export default {
  name: 'MouseCursorGradientTracking',
  methods: {
    handleMousemove(e) {
      const x = e.offsetX
      const y = e.offsetY

      e.target.style.setProperty('--x', `${ x }px`)
      e.target.style.setProperty('--y', `${ y }px`)
    }
  }
}
```

### demo

<thirty-seconds-of-css-MouseCursorGradientTracking/>

> [Tobias Reich](https://codepen.io/electerious/pen/MQrRxX)

## Overflow scroll gradient

### 关键点

- `::after ` `linear-gradient`

  > 使用伪类创建渐变背景的 content ，底部对齐并且设置一定的高度

- `pointer-events: none`

  > 元素实体 “虚化”
  >
  > 点击事件将无法生效 同时也无法触发 hover

### css

```css
.overflow-scroll-gradient {
  position: relative;
}

.overflow-scroll-gradient::after {
  content: '';
  position: absolute;
  bottom: 0;
  width: 16rem;
  height: 2rem;
  background: linear-gradient(
    rgba(255, 255, 255, 0.001),
    white
  ); /* transparent keyword is broken in Safari */
  pointer-events: none;
}

.overflow-scroll-gradient__scroller {
  overflow-y: scroll;
  background: white;
  width: 16rem;
  height: 10rem;
  padding: 1rem;
  line-height: 1.2;
}
```

### demo

<thirty-seconds-of-css-OverflowScrollGradient/>

## Shape separator

### css

```stylus
$shape(color)
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 12'%3E%3Cpath d='m12 0l12 12h-24z' fill='%23" + color + "'/%3E%3C/svg%3E"

.shape-separator
  position relative
  height 48px
  background #333

.shape-separator::after
  content ''
  background-image url($shape(fff));
  position absolute
  width 100%
  height 12px
  bottom 0
```

### demo

<thirty-seconds-of-css-ShapeSeparator/>

## Sibling fade

### 关键点

- `:not(selector)`

### css

```css
.sibling-fade span {
  padding: 0 1rem;
  transition: opacity 0.2s;
}

.sibling-fade:hover span:not(:hover) {
  opacity: 0.5;
}
```

### demo

<thirty-seconds-of-css-SiblingFade/>

## System font stack

### css

```css
.system-font-stack {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
```

> 本博客即使用此设置
>
> Some English word, limtick's blog is awesome! :thumbsup:

## Toggle switch

### 关键点

- `input[type='checkbox']:checked`

### html

```html
<input type="checkbox" id="demo_toggle" class="offscreen" />
<label for="demo_toggle" class="switch"></label>
```

### css

```css
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  transition: all 0.3s;
  cursor: pointer;
}

.switch::after {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 18px;
  background-color: white;
  top: 1px;
  left: 1px;
  transition: all 0.3s;
}

input[type='checkbox']:checked + .switch::after {
  transform: translateX(20px);
}

input[type='checkbox']:checked + .switch {
  background-color: #11829a;
}

.offscreen {
  position: absolute;
  left: -9999px;
}
```

> 更多阅读
>
> [css选择器](http://www.w3school.com.cn/cssref/css_selectors.asp)

### demo

<thirty-seconds-of-css-ToggleSwitch/>

## Triangle

### css

```stylus
.triangle
  width 0
  height 0
  border .5rem solid transparent

$colors = #ccc #f66 #11829a #a34
$direction = top right bottom left
$direction-reverse = bottom left top right

for d, i in $direction
  $reverse = $direction-reverse[i]
  .triangle-{d}
    border-{$reverse}-color $colors[i]

.triangle-origin
  for d, i in $direction
    $reverse = $direction-reverse[i]
    border-{$reverse}-color $colors[i]
```

### demo

<thirty-seconds-of-css-Triangle/>

## Zebra striped list

## css

```css
/* odd 奇数 | even 偶数 :nth-child() 从 1 计数*/
.striped-demo li:nth-child(odd) {
  background-color: #eee;
}
```

### demo

<thirty-seconds-of-css-ZebraStripedList/>