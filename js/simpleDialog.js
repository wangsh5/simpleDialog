/**
 * Created by dayee on 2017/2/13.
 */
;(function(window,document,$,undefined){
    //扩展jQuery对象
    $.extend({
        /*使用示例
         $.pcDialog({
             title:'测试',
             width:600,
             height:400,
             icon:'<img src=".png" />',
             content:'<p>测试</p>',
             init:function(){
                alert('init')
             },
             ok:{
                 name:'确定',
                 event:function(){
                    alert('ok')
                }
             },
             cancel:{
                 name:'取消',
                 event:function(){
                     alert('cancel')
                 }
             }
         });
         */
        pcDialog:function(option){
            var defaultSet={version:'0.0.1'};
            var options= $.extend({},defaultSet,option);
            /*基本框架*/
            var pcDialogId='pcDialog_'+new Date().getTime();
            $('#'+pcDialogId).remove();
            var html='<div class="pcDialog_container" id="'+pcDialogId+'">'+
                    '<div class="pcDialog_wrap" style="width:'+(options.width?options.width:500)+
                'px;height:'+(options.height?options.height:300)+'px;margin-top:-'+
                    (options.height?options.height/2:150)+'px;">'+
                    '<div class="pcDialog_header">'+
                    (options.title?options.title:'')+(options.icon?options.icon:'')+'<span class="close_btn">&times;</span></div>'+
                    '<div class="pcDialog_content">'+(options.content?options.content:'')+'</div>';
            if(options.cancel||options.ok){
                html+='<div class="pcDialog_footer">'+
                (options.ok?('<a class="ok_btn">'+(options.ok.name?options.ok.name:'确定')+'</a>'):'')+
                (options.cancel?('<a class="cancel_btn">'+(options.cancel.name?options.cancel.name:'取消')+'</a>'):'')+'</div>'
            }
            html+='</div></div>';
            $('body').append(html);
            $('#'+pcDialogId).fadeIn();
            /*初始化事件*/
            if(typeof options.init=='function'){
                options.init();
            }
            /*绑定事件*/
            //关闭按钮
            $('#'+pcDialogId).find('.close_btn').on('click',_destory);
            //确定按钮
            $('#'+pcDialogId).find('.ok_btn').on('click',function(){
                options.ok.event&&options.ok.event();
                _destory();
            });
            //取消按钮
            $('#'+pcDialogId).find('.cancel_btn').on('click',function(){
                options.cancel.event&&options.cancel.event();
                _destory();
            });
            function _destory(){
                $('#'+pcDialogId).fadeOut(function(){
                    $('#'+pcDialogId).find('.close_btn').off();
                    $('#'+pcDialogId).find('.ok_btn').off();
                    $('#'+pcDialogId).find('.cancel_btn').off();
                    $('#'+pcDialogId).remove();
                });
            }
        },
		 //使用示例
        /*$.mobDialog({
            title:'测试',
            content:'hello world',
            init:function(){
                alert('init')
            },
            ok:{
                name:'确定',
                event:function(){
                    alert('ok')
                }
            },
            cancel:{
                name:'取消',
                event:function(){
                    alert('no')
                }
            }
        });*/
        mobDialog:function(option){
            var defaultSet={version:'0.0.1'};
            var options= $.extend({},defaultSet,option);
            /*基本框架*/
            var mobDialogId='mobDialog_'+new Date().getTime();
            $('#'+mobDialogId).remove();
            var html='<div class="mobDialog_container" id="'+mobDialogId+'"><div class="mobDialog_wrap">';
                    if(options.title){
                        html+='<div class="mobDialog_header">'+options.title+'</div>'
                    }
                html+='<div class="mobDialog_content">'+(options.content?options.content:'')+'</div>';
                html+='<div class="mobDialog_footer">'+
                (options.cancel?('<a class="cancel_btn">'+(options.cancel.name?options.cancel.name:'')+'</a>'):'')+(options.ok?('<a class="ok_btn">'+(options.ok.name?options.ok.name:'')+'</a>'):'')+'</div>';
                html+='</div></div>';
            $('body').append(html);
            $('#'+mobDialogId).fadeIn();
            //初始化事件
            if(typeof options.init==='function'){
                options.init();
            }
            //按钮事件
            $('#'+mobDialogId).find('.ok_btn').on('click',function(){
                options.ok.event&&options.ok.event();
                _destroy();
            })
            $('#'+mobDialogId).find('.cancel_btn').on('click',function(){
                options.cancel.event&&options.cancel.event();
                _destroy();
            })
            //销毁
            function _destroy(){
                $('#'+mobDialogId).fadeOut(function(){
                    $('#'+mobDialogId).find('.ok_btn').off();
                    $('#'+mobDialogId).find('.cancel_btn').off();
                    $('#'+mobDialogId).remove();
                })
            }
        }
    })
})(window,document,jQuery);