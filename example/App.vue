<template>
    <div id="app">
        <div class="app-head">
            <div class="app-head-content">
                Martsforever
            </div>
        </div>
        <div class="app-body">
            <div class="app-body-desc">
                <div>
                    <span class="app-body-desc-title">
                        Vue-Codemirror-Editor
                    </span>
                    <span class="app-body-desc-label">
                      Vue component base on CodeMirror
                    </span>
                </div>
            </div>
            <div class="app-body-tabs">
                <a class="app-body-tab app-body-tab-active">Example</a>
                <a class="app-body-tab" href="#">Install</a>
                <a class="app-body-tab" href="https://codemirror.net/" target="_blank">CodeMirror</a>
                <a class="app-body-tab" href="https://codemirror.net/demo/theme.html" target="_blank">Theme</a>
                <a class="app-body-tab" href="https://codemirror.net/mode/index.html" target="_blank">Language</a>
                <a class="app-body-tab" target="_blank">Github</a>
            </div>
            <div class="app-body-examples">
                <demo1-basic-usage/>
                <demo2-theme/>
                <demo3-vue/>
            </div>
        </div>
        <div class="app-foot">

        </div>
    </div>
</template>

<script>

    import Demo1BasicUsage from "./demo/demo1-basic-usage";
    import Demo2Theme from "./demo/demo2-theme";
    import Demo3Vue from "./demo/demo3-vue";

    export default {
        name: 'app',
        components: {Demo3Vue, Demo2Theme, Demo1BasicUsage},
    }
</script>

<style lang="scss">
    html, body, #app {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        overflow: auto;
        font-family: sans-serif;

        .app-head {
            background-color: #12b4a5;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;

            .app-head-content {
                width: 1000px;
                color: white;
                font-size: 27px;
            }
        }

        .app-body {
            .app-body-desc {
                background-color: #f6f6f6;
                padding: 40px 0;
                letter-spacing: 1px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                & > div {
                    width: fit-content;
                    display: inline-flex;
                    flex-direction: column;
                    align-items: center;
                }

                .app-body-desc-title {
                    color: #333;
                    font-size: 36px;
                }

                .app-body-desc-label {
                    color: #999;
                    height: 44px;
                    line-height: 44px;
                }
            }

            .app-body-tabs {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 9px 0;
                user-select: none;

                .app-body-tab {
                    cursor: pointer;
                    padding: 9px 16px;
                    text-decoration: none;
                    color: #333;
                    border-radius: 3px;

                    &:not(:last-child) {
                        margin-right: 16px;
                    }

                    &:hover {
                        background-color: #f6f6f6;
                    }

                    &:active {
                        background: #e2e2e2;
                    }

                    &.app-body-tab-active {
                        background-color: #12b4a5;
                        color: white;
                    }
                }
            }

            .app-body-examples {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                & > div {
                    margin-bottom: 20px;
                }
            }
        }
    }
</style>
