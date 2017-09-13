# js原型链笔记


记住一个公式  AA.prototype===new AA().__proto__

构造器创建对象,会有一个prototype属性。js通过new构造器创建对象，此时生成一个__proto__对象（非内置的对象，为了访问对象的prototype属性，大多数浏览器都已实现），其中包含了constructor。

