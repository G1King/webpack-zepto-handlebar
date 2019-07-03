// (function ($) {
//   var compiled = {}
//   $.extend($.fn, {
//     handlebars: function (template, data) {
//       if (template instanceof Object) {
//         template = $(template).html()
//       }
//       compiled[template] = Handlebars.compile(template)
//       this.html(compiled[template](data))
//     }
//   })
//   // $.fn.handlebars = function (template, data) {
//   //     if (template instanceof Zepto) {
//   //         template = $(template).html();
//   //     }
//   //     compiled[template] = Handlebars.compile(template);
//   //     this.html(compiled[template](data));
//   // };
// })(Zepto)

export const _html = 'Leo'
