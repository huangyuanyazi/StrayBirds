<template>
    <f7-page no-navbar no-toolbar name="patent_search" id='patent_search'>
        <!--:clear="true"-->
        <f7-searchbar
                cancel-link="取消"
                placeholder="请输入关键字"
                @click:cancel="cancel"
                style="top:0"
        ></f7-searchbar>

        <f7-card>
            <f7-card-header>热门搜索</f7-card-header>
            <f7-card-content>
                <f7-chip :text="hotSearch.hot_search_item" v-for="hotSearch of hotSearchAll"></f7-chip>
            </f7-card-content>
        </f7-card>


        <f7-card>
            <f7-card-header>历史搜索</f7-card-header>
            <f7-card-content>
                <f7-list>
                    <f7-list-item link="/about/" :title="About"></f7-list-item>
                </f7-list>
            </f7-card-content>
            <f7-card-footer>
                <span></span>
                <span id="history_clear">清除历史记录</span>
                <span></span>
            </f7-card-footer>
        </f7-card>
    </f7-page>
</template>
<script>
    export default{
        data(){
            return {
                hotSearchAll: ""
            }
        },
        methods: {
            cancel(){
                this.$router.load({
                    url: "/patent/"
                })
            }
        },
        created(){
            $$.getJSON(config.mock.url+"/hot_search", (data, status, xhr) => {
               this.hotSearchAll=data
            })
        }


    }
</script>