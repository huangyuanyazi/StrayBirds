<template>
	<div id='app'>
		<f7-statusbar></f7-statusbar>
		<f7-views>
			<f7-view main>
				<f7-pages navbar-through toolbar-through>
					<f7-page no-navbar name="index">
						<f7-navbar title="淘权网" sliding></f7-navbar>
					</f7-page>
				</f7-pages>
				<f7-toolbar tabbar labels class='c-toolbar'>
					<f7-link icon-fa="book" text="专利" href="/patent/" route-tab-link="#tab_patent" active></f7-link>
					<f7-link icon-fa="bandcamp" text="商标" href="/trademark/" route-tab-link="#tab_trademark"></f7-link>
				</f7-toolbar>
				<!--空tab仅供show事件使用-->
				<f7-tabs>
					<!--tab:show方法在tab激活的时候触发-->
					<!--<f7-tab id="tab_patent" active @tab:show="tabActived('patent')"></f7-tab>-->
					<!--<f7-tab id="tab_trademark" @tab:show="tabActived('trademark')"></f7-tab>-->
					<f7-tab id="tab_patent"></f7-tab>
					<f7-tab id="tab_trademark" ></f7-tab>
				</f7-tabs>
			</f7-view>
		</f7-views>
	</div>
</template>
<script>

//    export default{
//        methods: {
//            tabActived(tab){
//                switch (tab) {
//                    case "patent":
//                        this.$f7.mainView.router.load({url: "/patent/"})
//                        break;
//                    case "trademark":
//                        this.$f7.mainView.router.load({url: 'page/trademark/index.html'})
//                        break;
//
//
//
//                }
//            }
//        }
//    }
</script>