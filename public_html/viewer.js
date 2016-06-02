/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
//    var urlQuery = {};
//    $.each(window.location.search.substring(1).split('&'), function() {
//        urlQuery[this.split('=')[0]] = this.split('=')[1];
//    });
//    var socket = io.connect('http://50.19.217.223');
//    console.log({id: urlQuery.id});
//    socket.emit('retrieve', {find: {id: urlQuery.id}});
//
//    socket.on('data', function(imgs) {
//        var url;
//        console.log(imgs.length);
//        if (!imgs[0].outputFiles) {
//            console.log('There has been an error loading the image');
//            return;
//        }
//        if (imgs[0].outputFiles.krpano) {
//            url = 'http://50.19.217.223' + imgs[0].outputFiles.krpano + '/' + imgs[0].id + '.xml';
//            makeKRPano(url);
//            return;
//        }
//        url = imgs[0].urlLocation + "/" + JSON.parse(imgs[0].outputFiles.replace(/\'/g, '"')).zoomify;
//        initialize(url);
//    });
    var image = $('<iframe src="https://s3.amazonaws.com/aqueti.data/composites/02252014090800/02252014090800.tiles/index.html">');
    $('body').append(image);
});