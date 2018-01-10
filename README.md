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
    
    4. 该插件绑定到window及document.body的全局事件更改为绑定到插件所在的DOM容器上，避免全局污染（暂时发现的是会导致imageedit中所有表单元素不可用）。
    (主要事件是mouseup、mousedown、mousemove)
    搜索_this.el所绑定的事件全部为修改后的。
    
2. AlloyImage 

    1. Array.prototype.del导致for 异常 (修改见issues) 
    [https://github.com/AlloyTeam/AlloyImage/issues/22](https://github.com/AlloyTeam/AlloyImage/issues/22)

3. imageedit

    1. 鉴于源码中好多功能耦合度过高，暂只将重复功能隐藏（如：裁剪、绘制）
    
    2. 右上角关闭按钮改为退出，可与AlloyClip联合多次修图改图
    
    3. 增加图片素材自定义上传功能（$("#image_file")绑定的事件）
    
    4. 优化图片下载功能，增加重命名并保证图片会正确下载。

4. imageedit 汉化

    1. 属性编辑部分（properties）
    不改变type的同时还需要增加name属性
    
    2. 控制部分（controls）、图形控制（shape_controls）
    同上。
    
    3. 部分可见的英汉互译

