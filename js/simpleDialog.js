/**
 * Created by dayee on 2017/2/13.
 */
;(function(window,document,$,undefined){
    //��չjQuery����
    $.extend({
        /*ʹ��ʾ��
         $.pcDialog({
             title:'����',
             width:600,
             height:400,
             icon:'<img src=".png" />',
             content:'<p>����</p>',
             init:function(){
                alert('init')
             },
             ok:{
                 name:'ȷ��',
                 event:function(){
                    alert('ok')
                }
             },
             cancel:{
                 name:'ȡ��',
                 event:function(){
                     alert('cancel')
                 }
             }
         });
         */
        pcDialog:function(option){
            var defaultSet={version:'0.0.1'};
            var options= $.extend({},defaultSet,option);
            /*�������*/
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
                (options.ok?('<a class="ok_btn">'+(options.ok.name?options.ok.name:'ȷ��')+'</a>'):'')+
                (options.cancel?('<a class="cancel_btn">'+(options.cancel.name?options.cancel.name:'ȡ��')+'</a>'):'')+'</div>'
            }
            html+='</div></div>';
            $('body').append(html);
            $('#'+pcDialogId).fadeIn();
            /*��ʼ���¼�*/
            if(typeof options.init=='function'){
                options.init();
            }
            /*���¼�*/
            //�رհ�ť
            $('#'+pcDialogId).find('.close_btn').on('click',_destory);
            //ȷ����ť
            $('#'+pcDialogId).find('.ok_btn').on('click',function(){
                options.ok.event&&options.ok.event();
                _destory();
            });
            //ȡ����ť
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
		 //ʹ��ʾ��
        /*$.mobDialog({
            title:'����',
            content:'hello world',
            init:function(){
                alert('init')
            },
            ok:{
                name:'ȷ��',
                event:function(){
                    alert('ok')
                }
            },
            cancel:{
                name:'ȡ��',
                event:function(){
                    alert('no')
                }
            }
        });*/
        mobDialog:function(option){
            var defaultSet={version:'0.0.1'};
            var options= $.extend({},defaultSet,option);
            /*�������*/
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
            //��ʼ���¼�
            if(typeof options.init==='function'){
                options.init();
            }
            //��ť�¼�
            $('#'+mobDialogId).find('.ok_btn').on('click',function(){
                options.ok.event&&options.ok.event();
                _destroy();
            })
            $('#'+mobDialogId).find('.cancel_btn').on('click',function(){
                options.cancel.event&&options.cancel.event();
                _destroy();
            })
            //����
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