'use strict';

hexo.extend.helper.register('sakura_config', function() {
    let { config, theme } = this;

    /* 
     * 邮箱信息之类的东西可以填在这里，这些js变量基本都作用于sakura-app.js
     */
    let option = {
        NProgressON: true,
        email_domain: "",
        email_name: "",
        cookie_version_control: "",
        qzone_autocomplete: false,
        site_name: `${config.title} | ${theme.subtitle}`,
        author_name: config.author,
        site_url: theme.url,
        v_appId: theme.v_appId,
        v_appKey: theme.v_appKey,
        mathjax: theme.mathjax,
        qq_api_url: "https://api.mashiro.top/qqinfo/", 
        qq_avatar_api_url: "https://api.mashiro.top/qqinfo/",
    };
    return `<script>
        var mashiro_global = new Object();
        var mashiro_option = ${JSON.stringify(option)};
    </script>`;
});