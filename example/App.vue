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
        <a class="app-body-tab app-body-tab-active" href="https://martsforever.github.io/vue-codemirror-editor/index.html">Example</a>
        <a class="app-body-tab" href="https://www.npmjs.com/package/vue-codemirror-editor" target="_blank">Install</a>
        <a class="app-body-tab" href="https://codemirror.net/" target="_blank">CodeMirror</a>
        <a class="app-body-tab" href="https://codemirror.net/demo/theme.html" target="_blank">Theme</a>
        <a class="app-body-tab" href="https://codemirror.net/mode/index.html" target="_blank">Language</a>
        <a class="app-body-tab" href="https://github.com/martSforever/vue-codemirror-editor" target="_blank">Github</a>
      </div>
      <div class="app-body-examples">
        <demo1-basic-usage/>
        <demo2-theme/>
        <demo3-vue/>
        <demo4-java/>
        <demo5-xml/>
        <demo6-merge/>
        <demo7-async-initialized/>
      </div>
    </div>
    <div class="app-foot">
      <div class="app-foot-content">
        power by martsforever
      </div>
    </div>
  </div>
</template>

<script>

  import Demo1BasicUsage from "./demo/demo1-basic-usage";
  import Demo2Theme from "./demo/demo2-theme";
  import Demo3Vue from "./demo/demo3-vue";
  import Demo4Java from "./demo/demo4-java";
  import Demo5Xml from "./demo/demo5-xml";
  import Demo6Merge from "./demo/demo6-merge";
  import Demo7AsyncInitialized from "./demo/demo7-async-initialized";

  export default {
    name: 'app',
    components: {Demo7AsyncInitialized, Demo6Merge, Demo5Xml, Demo4Java, Demo3Vue, Demo2Theme, Demo1BasicUsage},
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

        .app-foot-content {
          color: #333;
        }
      }
    }

    .app-foot {
      background-color: #f6f6f6;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #12b4a5;
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
        padding-bottom: 300px;

        & > div {
          margin-bottom: 20px;
        }
      }
    }
  }
</style>
