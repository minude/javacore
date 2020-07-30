(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{499:function(a,t,s){"use strict";s.r(t);var e=s(14),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"java-容器之-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-容器之-set"}},[a._v("#")]),a._v(" Java 容器之 Set")]),a._v(" "),s("blockquote",[s("p",[s("strong",[a._v("📦 本文以及示例源码已归档在 "),s("a",{attrs:{href:"https://github.com/dunwu/javacore/",target:"_blank",rel:"noopener noreferrer"}},[a._v("javacore"),s("OutboundLink")],1)])])]),a._v(" "),s("h2",{attrs:{id:"一、set-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、set-简介"}},[a._v("#")]),a._v(" 一、Set 简介")]),a._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/container/Set-diagrams.png",width:"400"}})]),a._v(" "),s("p",[a._v("Set 家族成员简介：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("Set")]),a._v(" 继承了 "),s("code",[a._v("Collection")]),a._v(" 的接口。实际上 "),s("code",[a._v("Set")]),a._v(" 就是 "),s("code",[a._v("Collection")]),a._v("，只是行为略有不同："),s("code",[a._v("Set")]),a._v(" 集合不允许有重复元素。")]),a._v(" "),s("li",[s("code",[a._v("SortedSet")]),a._v(" 继承了 "),s("code",[a._v("Set")]),a._v(" 的接口。"),s("code",[a._v("SortedSet")]),a._v(" 中的内容是排序的唯一值，排序的方法是通过比较器(Comparator)。")]),a._v(" "),s("li",[s("code",[a._v("NavigableSet")]),a._v(" 继承了 "),s("code",[a._v("SortedSet")]),a._v(' 的接口。它提供了丰富的查找方法：如"获取大于/等于某值的元素"、“获取小于/等于某值的元素”等等。')]),a._v(" "),s("li",[s("code",[a._v("AbstractSet")]),a._v(" 是一个抽象类，它继承于 "),s("code",[a._v("AbstractCollection")]),a._v("，"),s("code",[a._v("AbstractCollection")]),a._v(" 实现了 Set 中的绝大部分方法，为实现 "),s("code",[a._v("Set")]),a._v(" 的实例类提供了便利。")]),a._v(" "),s("li",[s("code",[a._v("HashSet")]),a._v(" 类依赖于 "),s("code",[a._v("HashMap")]),a._v("，它实际上是通过 "),s("code",[a._v("HashMap")]),a._v(" 实现的。"),s("code",[a._v("HashSet")]),a._v(" 中的元素是无序的、散列的。")]),a._v(" "),s("li",[s("code",[a._v("TreeSet")]),a._v(" 类依赖于 "),s("code",[a._v("TreeMap")]),a._v("，它实际上是通过 "),s("code",[a._v("TreeMap")]),a._v(" 实现的。"),s("code",[a._v("TreeSet")]),a._v(" 中的元素是有序的，它是按自然排序或者用户指定比较器排序的 Set。")]),a._v(" "),s("li",[s("code",[a._v("LinkedHashSet")]),a._v(" 是按插入顺序排序的 Set。")]),a._v(" "),s("li",[s("code",[a._v("EnumSet")]),a._v(" 是只能存放 Emum 枚举类型的 Set。")])]),a._v(" "),s("h3",{attrs:{id:"set-接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-接口"}},[a._v("#")]),a._v(" Set 接口")]),a._v(" "),s("p",[s("code",[a._v("Set")]),a._v(" 继承了 "),s("code",[a._v("Collection")]),a._v(" 的接口。实际上，"),s("code",[a._v("Set")]),a._v(" 就是 "),s("code",[a._v("Collection")]),a._v("，二者提供的方法完全相同。")]),a._v(" "),s("p",[s("code",[a._v("Set")]),a._v(" 接口定义如下：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Set")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Collection")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"sortedset-接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sortedset-接口"}},[a._v("#")]),a._v(" SortedSet 接口")]),a._v(" "),s("p",[a._v("继承了 "),s("code",[a._v("Set")]),a._v(" 的接口。"),s("code",[a._v("SortedSet")]),a._v(" 中的内容是排序的唯一值，排序的方法是通过比较器(Comparator)。")]),a._v(" "),s("p",[s("code",[a._v("SortedSet")]),a._v(" 接口定义如下：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SortedSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Set")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("code",[a._v("SortedSet")]),a._v(" 接口新扩展的方法：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("comparator")]),a._v(" - 返回 Comparator")]),a._v(" "),s("li",[s("code",[a._v("subSet")]),a._v(" - 返回指定区间的子集")]),a._v(" "),s("li",[s("code",[a._v("headSet")]),a._v(" - 返回小于指定元素的子集")]),a._v(" "),s("li",[s("code",[a._v("tailSet")]),a._v(" - 返回大于指定元素的子集")]),a._v(" "),s("li",[s("code",[a._v("first")]),a._v(" - 返回第一个元素")]),a._v(" "),s("li",[s("code",[a._v("last")]),a._v(" - 返回最后一个元素")]),a._v(" "),s("li",[a._v("spliterator")])]),a._v(" "),s("h3",{attrs:{id:"navigableset-接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigableset-接口"}},[a._v("#")]),a._v(" NavigableSet 接口")]),a._v(" "),s("p",[s("code",[a._v("NavigableSet")]),a._v(" 继承了 "),s("code",[a._v("SortedSet")]),a._v("。它提供了丰富的查找方法。")]),a._v(" "),s("p",[s("code",[a._v("NavigableSet")]),a._v(" 接口定义如下：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("NavigableSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SortedSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("code",[a._v("NavigableSet")]),a._v(" 接口新扩展的方法：")]),a._v(" "),s("ul",[s("li",[a._v("lower - 返回小于指定值的元素中最接近的元素")]),a._v(" "),s("li",[a._v("higher - 返回大于指定值的元素中最接近的元素")]),a._v(" "),s("li",[a._v("floor - 返回小于或等于指定值的元素中最接近的元素")]),a._v(" "),s("li",[a._v("ceiling - 返回大于或等于指定值的元素中最接近的元素")]),a._v(" "),s("li",[a._v("pollFirst - 检索并移除第一个（最小的）元素")]),a._v(" "),s("li",[a._v("pollLast - 检索并移除最后一个（最大的）元素")]),a._v(" "),s("li",[a._v("descendingSet - 返回反序排列的 Set")]),a._v(" "),s("li",[a._v("descendingIterator - 返回反序排列的 Set 的迭代器")]),a._v(" "),s("li",[a._v("subSet - 返回指定区间的子集")]),a._v(" "),s("li",[a._v("headSet - 返回小于指定元素的子集")]),a._v(" "),s("li",[a._v("tailSet - 返回大于指定元素的子集")])]),a._v(" "),s("h3",{attrs:{id:"abstractset-抽象类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstractset-抽象类"}},[a._v("#")]),a._v(" AbstractSet 抽象类")]),a._v(" "),s("p",[s("code",[a._v("AbstractSet")]),a._v(" 类提供 "),s("code",[a._v("Set")]),a._v(" 接口的核心实现，以最大限度地减少实现 "),s("code",[a._v("Set")]),a._v(" 接口所需的工作。")]),a._v(" "),s("p",[s("code",[a._v("AbstractSet")]),a._v(" 抽象类定义如下：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("abstract")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AbstractSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AbstractCollection")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Set")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("事实上，主要的实现已经在 "),s("code",[a._v("AbstractCollection")]),a._v(" 中完成。")]),a._v(" "),s("h2",{attrs:{id:"二、hashset-类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、hashset-类"}},[a._v("#")]),a._v(" 二、HashSet 类")]),a._v(" "),s("p",[s("code",[a._v("HashSet")]),a._v(" 类依赖于 "),s("code",[a._v("HashMap")]),a._v("，它实际上是通过 "),s("code",[a._v("HashMap")]),a._v(" 实现的。"),s("code",[a._v("HashSet")]),a._v(" 中的元素是无序的、散列的。")]),a._v(" "),s("p",[s("code",[a._v("HashSet")]),a._v(" 类定义如下：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HashSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AbstractSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Set")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Cloneable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Serializable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"hashset-要点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hashset-要点"}},[a._v("#")]),a._v(" HashSet 要点")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("HashSet")]),a._v(" 通过继承 "),s("code",[a._v("AbstractSet")]),a._v(" 实现了 "),s("code",[a._v("Set")]),a._v(" 接口中的骨干方法。")]),a._v(" "),s("li",[s("code",[a._v("HashSet")]),a._v(" 实现了 "),s("code",[a._v("Cloneable")]),a._v("，所以支持克隆。")]),a._v(" "),s("li",[s("code",[a._v("HashSet")]),a._v(" 实现了 "),s("code",[a._v("Serializable")]),a._v("，所以支持序列化。")]),a._v(" "),s("li",[s("code",[a._v("HashSet")]),a._v(" 中存储的元素是无序的。")]),a._v(" "),s("li",[s("code",[a._v("HashSet")]),a._v(" 允许 null 值的元素。")]),a._v(" "),s("li",[s("code",[a._v("HashSet")]),a._v(" 不是线程安全的。")])]),a._v(" "),s("h3",{attrs:{id:"hashset-原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hashset-原理"}},[a._v("#")]),a._v(" HashSet 原理")]),a._v(" "),s("p",[s("strong",[s("code",[a._v("HashSet")]),a._v(" 是基于 "),s("code",[a._v("HashMap")]),a._v(" 实现的。")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// HashSet 的核心，通过维护一个 HashMap 实体来实现 HashSet 方法")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("transient")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HashMap")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// PRESENT 是用于关联 map 中当前操作元素的一个虚拟值")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" PRESENT "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("ul",[s("li",[s("code",[a._v("HashSet")]),a._v(" 中维护了一个 "),s("code",[a._v("HashMap")]),a._v(" 对象 map，"),s("code",[a._v("HashSet")]),a._v(" 的重要方法，如 "),s("code",[a._v("add")]),a._v("、"),s("code",[a._v("remove")]),a._v("、"),s("code",[a._v("iterator")]),a._v("、"),s("code",[a._v("clear")]),a._v("、"),s("code",[a._v("size")]),a._v(" 等都是围绕 map 实现的。\n"),s("ul",[s("li",[s("code",[a._v("HashSet")]),a._v(" 类中通过定义 "),s("code",[a._v("writeObject()")]),a._v(" 和 "),s("code",[a._v("readObject()")]),a._v(" 方法确定了其序列化和反序列化的机制。")])])]),a._v(" "),s("li",[a._v("PRESENT 是用于关联 map 中当前操作元素的一个虚拟值。")])]),a._v(" "),s("h2",{attrs:{id:"三、treeset-类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、treeset-类"}},[a._v("#")]),a._v(" 三、TreeSet 类")]),a._v(" "),s("p",[s("code",[a._v("TreeSet")]),a._v(" 类依赖于 "),s("code",[a._v("TreeMap")]),a._v("，它实际上是通过 "),s("code",[a._v("TreeMap")]),a._v(" 实现的。"),s("code",[a._v("TreeSet")]),a._v(" 中的元素是有序的，它是按自然排序或者用户指定比较器排序的 Set。")]),a._v(" "),s("p",[s("code",[a._v("TreeSet")]),a._v(" 类定义如下：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TreeSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AbstractSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("NavigableSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Cloneable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Serializable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"treeset-要点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#treeset-要点"}},[a._v("#")]),a._v(" TreeSet 要点")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("TreeSet")]),a._v(" 通过继承 "),s("code",[a._v("AbstractSet")]),a._v(" 实现了 "),s("code",[a._v("NavigableSet")]),a._v(" 接口中的骨干方法。")]),a._v(" "),s("li",[s("code",[a._v("TreeSet")]),a._v(" 实现了 "),s("code",[a._v("Cloneable")]),a._v("，所以支持克隆。")]),a._v(" "),s("li",[s("code",[a._v("TreeSet")]),a._v(" 实现了 "),s("code",[a._v("Serializable")]),a._v("，所以支持序列化。")]),a._v(" "),s("li",[s("code",[a._v("TreeSet")]),a._v(" 中存储的元素是有序的。排序规则是自然顺序或比较器（"),s("code",[a._v("Comparator")]),a._v("）中提供的顺序规则。")]),a._v(" "),s("li",[s("code",[a._v("TreeSet")]),a._v(" 不是线程安全的。")])]),a._v(" "),s("h3",{attrs:{id:"treeset-源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#treeset-源码"}},[a._v("#")]),a._v(" TreeSet 源码")]),a._v(" "),s("p",[s("strong",[a._v("TreeSet 是基于 TreeMap 实现的。")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// TreeSet 的核心，通过维护一个 NavigableMap 实体来实现 TreeSet 方法")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("transient")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("NavigableMap")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// PRESENT 是用于关联 map 中当前操作元素的一个虚拟值")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" PRESENT "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("ul",[s("li",[s("code",[a._v("TreeSet")]),a._v(" 中维护了一个 "),s("code",[a._v("NavigableMap")]),a._v(" 对象 map（实际上是一个 TreeMap 实例），"),s("code",[a._v("TreeSet")]),a._v(" 的重要方法，如 "),s("code",[a._v("add")]),a._v("、"),s("code",[a._v("remove")]),a._v("、"),s("code",[a._v("iterator")]),a._v("、"),s("code",[a._v("clear")]),a._v("、"),s("code",[a._v("size")]),a._v(" 等都是围绕 map 实现的。")]),a._v(" "),s("li",[s("code",[a._v("PRESENT")]),a._v(" 是用于关联 "),s("code",[a._v("map")]),a._v(" 中当前操作元素的一个虚拟值。"),s("code",[a._v("TreeSet")]),a._v(" 中的元素都被当成 "),s("code",[a._v("TreeMap")]),a._v(" 的 key 存储，而 value 都填的是 "),s("code",[a._v("PRESENT")]),a._v("。")])]),a._v(" "),s("h2",{attrs:{id:"四、linkedhashset-类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、linkedhashset-类"}},[a._v("#")]),a._v(" 四、LinkedHashSet 类")]),a._v(" "),s("p",[s("code",[a._v("LinkedHashSet")]),a._v(" 是按插入顺序排序的 Set。")]),a._v(" "),s("p",[s("code",[a._v("LinkedHashSet")]),a._v(" 类定义如下：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LinkedHashSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HashSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Set")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Cloneable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Serializable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"linkedhashset-要点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linkedhashset-要点"}},[a._v("#")]),a._v(" LinkedHashSet 要点")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("LinkedHashSet")]),a._v(" 通过继承 "),s("code",[a._v("HashSet")]),a._v(" 实现了 "),s("code",[a._v("Set")]),a._v(" 接口中的骨干方法。")]),a._v(" "),s("li",[s("code",[a._v("LinkedHashSet")]),a._v(" 实现了 "),s("code",[a._v("Cloneable")]),a._v("，所以支持克隆。")]),a._v(" "),s("li",[s("code",[a._v("LinkedHashSet")]),a._v(" 实现了 "),s("code",[a._v("Serializable")]),a._v("，所以支持序列化。")]),a._v(" "),s("li",[s("code",[a._v("LinkedHashSet")]),a._v(" 中存储的元素是按照插入顺序保存的。")]),a._v(" "),s("li",[s("code",[a._v("LinkedHashSet")]),a._v(" 不是线程安全的。")])]),a._v(" "),s("h3",{attrs:{id:"linkedhashset-原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linkedhashset-原理"}},[a._v("#")]),a._v(" LinkedHashSet 原理")]),a._v(" "),s("p",[s("code",[a._v("LinkedHashSet")]),a._v(" 有三个构造方法，无一例外，都是调用父类 "),s("code",[a._v("HashSet")]),a._v(" 的构造方法。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LinkedHashSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" initialCapacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("float")]),a._v(" loadFactor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("initialCapacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" loadFactor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LinkedHashSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" initialCapacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("initialCapacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v(".75f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LinkedHashSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v(".75f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("需要强调的是："),s("strong",[a._v("LinkedHashSet 构造方法实际上调用的是父类 HashSet 的非 public 构造方法。")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HashSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" initialCapacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("float")]),a._v(" loadFactor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" dummy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    map "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LinkedHashMap")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("initialCapacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" loadFactor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("不同于 "),s("code",[a._v("HashSet")]),a._v(" "),s("code",[a._v("public")]),a._v(" 构造方法中初始化的 "),s("code",[a._v("HashMap")]),a._v(" 实例，这个构造方法中，初始化了 "),s("code",[a._v("LinkedHashMap")]),a._v(" 实例。")]),a._v(" "),s("p",[a._v("也就是说，实际上，"),s("code",[a._v("LinkedHashSet")]),a._v(" 维护了一个双链表。由双链表的特性可以知道，它是按照元素的插入顺序保存的。所以，这就是 "),s("code",[a._v("LinkedHashSet")]),a._v(" 中存储的元素是按照插入顺序保存的原理。")]),a._v(" "),s("h2",{attrs:{id:"五、enumset-类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、enumset-类"}},[a._v("#")]),a._v(" 五、EnumSet 类")]),a._v(" "),s("p",[s("code",[a._v("EnumSet")]),a._v(" 类定义如下：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("abstract")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("EnumSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Enum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AbstractSet")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Cloneable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Serializable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"enumset-要点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enumset-要点"}},[a._v("#")]),a._v(" EnumSet 要点")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("EnumSet")]),a._v(" 继承了 "),s("code",[a._v("AbstractSet")]),a._v("，所以有 "),s("code",[a._v("Set")]),a._v(" 接口中的骨干方法。")]),a._v(" "),s("li",[s("code",[a._v("EnumSet")]),a._v(" 实现了 "),s("code",[a._v("Cloneable")]),a._v("，所以支持克隆。")]),a._v(" "),s("li",[s("code",[a._v("EnumSet")]),a._v(" 实现了 "),s("code",[a._v("Serializable")]),a._v("，所以支持序列化。")]),a._v(" "),s("li",[s("code",[a._v("EnumSet")]),a._v(" 通过 "),s("code",[a._v("<E extends Enum<E>>")]),a._v(" 限定了存储元素必须是枚举值。")]),a._v(" "),s("li",[s("code",[a._v("EnumSet")]),a._v(" 没有构造方法，只能通过类中的 "),s("code",[a._v("static")]),a._v(" 方法来创建 "),s("code",[a._v("EnumSet")]),a._v(" 对象。")]),a._v(" "),s("li",[s("code",[a._v("EnumSet")]),a._v(" 是有序的。以枚举值在 "),s("code",[a._v("EnumSet")]),a._v(" 类中的定义顺序来决定集合元素的顺序。")]),a._v(" "),s("li",[s("code",[a._v("EnumSet")]),a._v(" 不是线程安全的。")])]),a._v(" "),s("h2",{attrs:{id:"六、要点总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、要点总结"}},[a._v("#")]),a._v(" 六、要点总结")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20200221190717.png",alt:"img"}})]),a._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://item.jd.com/10058164.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java 编程思想（Thinking in java）"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);