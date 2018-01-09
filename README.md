## 开发纪要

### 库使用说明

- Fabric.js is a powerful and simple Javascript HTML5 canvas library
[https://github.com/kangax/fabric.js/ ](https://github.com/kangax/fabric.js/ )

- CanvasAreaDraw : Image Maps Canvas Drawing 
[https://github.com/fahrenheit-marketing/jquery-canvas-area-draw](https://github.com/fahrenheit-marketing/jquery-canvas-area-draw)

- Jcrop : the jQuery Image Cropping Plugin
[https://github.com/tapmodo/Jcrop](https://github.com/tapmodo/Jcrop)

- AlloyClip : 基于AlloyImage的图片裁切组件
[https://github.com/AlloyTeam/AlloyClip/tree/master](https://github.com/AlloyTeam/AlloyClip/tree/master)

- AlloyImage : 基于HTML5技术的专业图像处理库
[https://github.com/AlloyTeam/AlloyImage](https://github.com/AlloyTeam/AlloyImage)


### 源码修改记录

1. AlloyClip 

    1. 将图片和裁剪框都进行了视觉缩小为原来的1/2，为适应页面显示。
（ c.defaultWidth ==>  c.defaultWidth/2 ）

    2. button.innerText = '上传图片';改变按钮的生成方式及样式更加现代化；
    > 其他必要的地方加入icon图标,部分样式重写
    
    3. 增加边框可选参数，可自定义增减边框图形 参数：BORder

2. imageedit 汉化

    1. 

