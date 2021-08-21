const app = new Vue({
    el: '#app',
    data: {
        selected2d: medmnist2d[0],
        selected3d: medmnist3d[0],
        selectedFormat3d: "gif"
    },
    created: function () {
        console.log("READY");
    },
    methods: {}
});