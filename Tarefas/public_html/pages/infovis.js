var labelType, useGradients, nativeTextSupport, animate;

(function () {
    var ua = navigator.userAgent,
            iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
            typeOfCanvas = typeof HTMLCanvasElement,
            nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
            textSupport = nativeCanvasSupport
            && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
    //I'm setting this based on the fact that ExCanvas provides text support for IE
    //and that as of today iPhone/iPad current text support is lame
    labelType = (!nativeCanvasSupport || (textSupport && !iStuff)) ? 'Native' : 'HTML';
    nativeTextSupport = labelType == 'Native';
    useGradients = nativeCanvasSupport;
    animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
    elem: false,
    write: function (text) {
        if (!this.elem)
            this.elem = document.getElementById('log');
        this.elem.innerHTML = text;
        this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
    }
};


function init() {
    //init data
    var json = {
        "id": "190_0",
        "name": "Pearl Jam",
        "children": [{
                "id": "306208_1",
                "name": "Pearl Jam &amp; Cypress Hill",
                "data": {
                    "band": "Pearl Jam",
                    "relation": "collaboration"
                },
                "children": [{
                        "id": "84_2",
                        "name": "Cypress Hill",
                        "data": {
                            "band": "Pearl Jam &amp; Cypress Hill",
                            "relation": "collaboration"
                        },
                        "children": []
                    }]
            }, {
                "id": "107877_3",
                "name": "Neil Young &amp; Pearl Jam",
                "data": {
                    "band": "Pearl Jam",
                    "relation": "collaboration"
                },
                "children": [{
                        "id": "964_4",
                        "name": "Neil Young",
                        "data": {
                            "band": "Neil Young &amp; Pearl Jam",
                            "relation": "collaboration"
                        },
                        "children": []
                    }]
            }, {
                "id": "236797_5",
                "name": "Jeff Ament",
                "data": {
                    "band": "Pearl Jam",
                    "relation": "member of band"
                },
                "children": [{
                        "id": "1756_6",
                        "name": "Temple of the Dog",
                        "data": {
                            "band": "Jeff Ament",
                            "relation": "member of band"
                        },
                        "children": []
                    }, {
                        "id": "14581_7",
                        "name": "Mother Love Bone",
                        "data": {
                            "band": "Jeff Ament",
                            "relation": "member of band"
                        },
                        "children": []
                    }, {
                        "id": "50188_8",
                        "name": "Green River",
                        "data": {
                            "band": "Jeff Ament",
                            "relation": "member of band"
                        },
                        "children": []
                    }, {
                        "id": "65452_9",
                        "name": "M.A.C.C.",
                        "data": {
                            "band": "Jeff Ament",
                            "relation": "collaboration"
                        },
                        "children": []
                    }, {
                        "id": "115632_10",
                        "name": "Three Fish",
                        "data": {
                            "band": "Jeff Ament",
                            "relation": "member of band"
                        },
                        "children": []
                    }, {
                        "id": "346850_11",
                        "name": "Gossman Project",
                        "data": {
                            "band": "Jeff Ament",
                            "relation": "member of band"
                        },
                        "children": []
                    }]
            }, {
                "id": "41529_12",
                "name": "Stone Gossard",
                "data": {
                    "band": "Pearl Jam",
                    "relation": "member of band"
                },
                "children": [{
                        "id": "1756_13",
                        "name": "Temple of the Dog",
                        "data": {
                            "band": "Stone Gossard",
                            "relation": "member of band"
                        },
                        "children": []
                    }, {
                        "id": "14581_14",
                        "name": "Mother Love Bone",
                        "data": {
                            "band": "Stone Gossard",
                            "relation": "member of band"
                        },
                        "children": []
                    }, {
                        "id": "24119_15",
                        "name": "Brad",
                        "data": {
                            "band": "Stone Gossard",
                            "relation": "member of band"
                        },
                        "children": []
                    }, {
                        "id": "50188_16",
                        "name": "Green River",
                        "data": {
                            "band": "Stone Gossard",
                            "relation": "member of band"
                        },
                        "children": []
                    }, {
                        "id": "346850_17",
                        "name": "Gossman Project",
                        "data": {
                            "band": "Stone Gossard",
                            "relation": "member of band"
                        },
                        "children": []
                    }]
            }, {
                "id": "131161_18",
                "name": "Eddie Vedder",
                "data": {
                    "band": "Pearl Jam",
                    "relation": "member of band"
                },
                "children": [{
                        "id": "1756_19",
                        "name": "Temple of the Dog",
                        "data": {
                            "band": "Eddie Vedder",
                            "relation": "member of band"
                        },
                        "children": []
                    }, {
                        "id": "72007_20",
                        "name": "Eddie Vedder &amp; Zeke",
                        "data": {
                            "band": "Eddie Vedder",
                            "relation": "collaboration"
                        },
                        "children": []
                    }, {
                        "id": "236657_21",
                        "name": "Bad Radio",
                        "data": {
                            "band": "Eddie Vedder",
                            "relation": "member of band"
                        },
                        "children": []
                    }, {
                        "id": "432176_22",
                        "name": "Beck &amp; Eddie Vedder",
                        "data": {
                            "band": "Eddie Vedder",
                            "relation": "collaboration"
                        },
                        "children": []
                    }]
            }, {
                "id": "236583_23",
                "name": "Mike McCready",
                "data": {
                    "band": "Pearl Jam",
                    "relation": "member of band"
                },
                "children": [{
                        "id": "1744_24",
                        "name": "Mad Season",
                        "data": {
                            "band": "Mike McCready",
                            "relation": "member of band"
                        },
                        "children": []
                    }, {
                        "id": "1756_25",
                        "name": "Temple of the Dog",
                        "data": {
                            "band": "Mike McCready",
                            "relation": "member of band"
                        },
                        "children": []
                    }, {
                        "id": "43661_26",
                        "name": "$10,000 Gold Chain",
                        "data": {
                            "band": "Mike McCready",
                            "relation": "collaboration"
                        },
                        "children": []
                    }, {
                        "id": "65452_27",
                        "name": "M.A.C.C.",
                        "data": {
                            "band": "Mike McCready",
                            "relation": "collaboration"
                        },
                        "children": []
                    }, {
                        "id": "153766_28",
                        "name": "The Rockfords",
                        "data": {
                            "band": "Mike McCready",
                            "relation": "member of band"
                        },
                        "children": []
                    }, {
                        "id": "346850_29",
                        "name": "Gossman Project",
                        "data": {
                            "band": "Mike McCready",
                            "relation": "member of band"
                        },
                        "children": []
                    }]
            }, {
                "id": "236585_30",
                "name": "Matt Cameron",
                "data": {
                    "band": "Pearl Jam",
                    "relation": "member of band"
                },
                "children": [{
                        "id": "1111_31",
                        "name": "Soundgarden",
                        "data": {
                            "band": "Matt Cameron",
                            "relation": "member of band"
                        },
                        "children": []
                    }, {
                        "id": "1756_32",
                        "name": "Temple of the Dog",
                        "data": {
                            "band": "Matt Cameron",
                            "relation": "member of band"
                        },
                        "children": []
                    }, {
                        "id": "9570_33",
                        "name": "Eleven",
                        "data": {
                            "band": "Matt Cameron",
                            "relation": "supporting musician"
                        },
                        "children": []
                    }, {
                        "id": "11783_34",
                        "name": "Queens of the Stone Age",
                        "data": {
                            "band": "Matt Cameron",
                            "relation": "member of band"
                        },
                        "children": []
                    }, {
                        "id": "61972_35",
                        "name": "Wellwater Conspiracy",
                        "data": {
                            "band": "Matt Cameron",
                            "relation": "member of band"
                        },
                        "children": []
                    }, {
                        "id": "65452_36",
                        "name": "M.A.C.C.",
                        "data": {
                            "band": "Matt Cameron",
                            "relation": "collaboration"
                        },
                        "children": []
                    }, {
                        "id": "353097_37",
                        "name": "Tone Dogs",
                        "data": {
                            "band": "Matt Cameron",
                            "relation": "member of band"
                        },
                        "children": []
                    }]
            }, {
                "id": "236594_38",
                "name": "Dave Krusen",
                "data": {
                    "band": "Pearl Jam",
                    "relation": "member of band"
                },
                "children": [{
                        "id": "2092_39",
                        "name": "Candlebox",
                        "data": {
                            "band": "Dave Krusen",
                            "relation": "member of band"
                        },
                        "children": []
                    }]
            }, {
                "id": "236022_40",
                "name": "Matt Chamberlain",
                "data": {
                    "band": "Pearl Jam",
                    "relation": "member of band"
                },
                "children": [{
                        "id": "54761_41",
                        "name": "Critters Buggin",
                        "data": {
                            "band": "Matt Chamberlain",
                            "relation": "member of band"
                        },
                        "children": []
                    }, {
                        "id": "92043_42",
                        "name": "Edie Brickell and New Bohemians",
                        "data": {
                            "band": "Matt Chamberlain",
                            "relation": "member of band"
                        },
                        "children": []
                    }]
            }, {
                "id": "236611_43",
                "name": "Dave Abbruzzese",
                "data": {
                    "band": "Pearl Jam",
                    "relation": "member of band"
                },
                "children": [{
                        "id": "276933_44",
                        "name": "Green Romance Orchestra",
                        "data": {
                            "band": "Dave Abbruzzese",
                            "relation": "member of band"
                        },
                        "children": []
                    }]
            }, {
                "id": "236612_45",
                "name": "Jack Irons",
                "data": {
                    "band": "Pearl Jam",
                    "relation": "member of band"
                },
                "children": [{
                        "id": "4619_46",
                        "name": "Redd Kross",
                        "data": {
                            "band": "Jack Irons",
                            "relation": "member of band"
                        },
                        "children": []
                    }, {
                        "id": "9570_47",
                        "name": "Eleven",
                        "data": {
                            "band": "Jack Irons",
                            "relation": "member of band"
                        },
                        "children": []
                    }, {
                        "id": "12389_48",
                        "name": "Red Hot Chili Peppers",
                        "data": {
                            "band": "Jack Irons",
                            "relation": "member of band"
                        },
                        "children": []
                    }, {
                        "id": "114288_49",
                        "name": "Anthym",
                        "data": {
                            "band": "Jack Irons",
                            "relation": "member of band"
                        },
                        "children": []
                    }, {
                        "id": "240013_50",
                        "name": "What Is This?",
                        "data": {
                            "band": "Jack Irons",
                            "relation": "member of band"
                        },
                        "children": []
                    }]
            }],
        "data": []
    };
    //end
    var infovis = document.getElementById('infovis');
    var w = infovis.offsetWidth - 50, h = infovis.offsetHeight - 50;

    //init Hypertree
    var ht = new $jit.Hypertree({
        //id of the visualization container
        injectInto: 'infovis',
        //canvas width and height
        width: w,
        height: h,
        //Change node and edge styles such as
        //color, width and dimensions.
        Node: {
            dim: 9,
            color: "darkred"
        },
        Edge: {
            lineWidth: 2,
            color: "#088"
        },
        onBeforeCompute: function (node) {
            Log.write("centering");
        },
        //Attach event handlers and add text to the
        //labels. This method is only triggered on label
        //creation
        onCreateLabel: function (domElement, node) {
            domElement.innerHTML = node.name;
            $jit.util.addEvent(domElement, 'click', function () {
                ht.onClick(node.id, {
                    onComplete: function () {
                        ht.controller.onComplete();
                    }
                });
            });
        },
        //Change node styles when labels are placed
        //or moved.
        onPlaceLabel: function (domElement, node) {
            var style = domElement.style;
            style.display = '';
            style.cursor = 'pointer';
            if (node._depth <= 1) {
                style.fontSize = "0.8em";
                style.color = "#ddd";

            } else if (node._depth == 2) {
                style.fontSize = "0.7em";
                style.color = "#555";

            } else {
                style.display = 'none';
            }

            var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            style.left = (left - w / 2) + 'px';
        },
        onComplete: function () {
//            Log.write("done");

            //Build the right column relations list.
            //This is done by collecting the information (stored in the data property) 
            //for all the nodes adjacent to the centered node.
            var node = ht.graph.getClosestNodeToOrigin("current");
            var html = "<h4>" + node.name + "</h4><b>Connections:</b>";
            html += "<ul>";
            node.eachAdjacency(function (adj) {
                var child = adj.nodeTo;
                if (child.data) {
                    var rel = (child.data.band == node.name) ? child.data.relation : node.data.relation;
                    html += "<li>" + child.name + " " + "<div class=\"relation\">(relation: " + rel + ")</div></li>";
                }
            });
            html += "</ul>";
            $jit.id('inner-details').innerHTML = html;
        }
    });
    //load JSON data.
    ht.loadJSON(json);
    //compute positions and plot.
    ht.refresh();
    //end
    ht.controller.onComplete();
}
