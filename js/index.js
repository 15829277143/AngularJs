var app = angular.module("myApp", []);
			app.controller("ctrl", ['$scope', function($scope) {
				$scope.data = {
					"button": [{
							"type": "click",
							"name": "今日歌曲",
							"key": "V222dmddmmd"
						},
						{
							"type": "view",
							"name": "今日歌曲",
							"url": "V222dmddmmd"
						},
						{
							"type": "view",
							"name": "菜单",
							"url": "V222dmddmmd",
							"sub_button": [{
									"type": "click",
									"name": "今日歌曲",
									"key": "V222dmddmmd"
								},
								{
									"type": "view",
									"name": "今日歌曲",
									"url": "V222dmddmmd"
								},
								{
									"type": "click",
									"name": "今日歌曲",
									"key": "V222dmddmmd"
								}
							]
						}

					]
				};
				$scope.addTopMenu = function() {
					var menu = {
						"type": "click",
						"name": "今日歌曲",
						"key": "V222dmddmmd"
					};
					if($scope.data.button.length == 4) {
						alert("最多只能添加三个");
					} else {
						$scope.data.button.push(menu);
					}

				};
				$scope.addsubMenu = function(item) {
					var menu = {
						"type": "view",
						"name": "今日歌曲",
						"key": "V222dmddmmd"
					};
					if(!item.sub_button) {
						item.sub_button = [];
					}
					if(item.sub_button.length == 5) {
						alert("最多只能添加五个");
					} else {
						item.sub_button.push(menu);
					}

				};
				$scope.removeTopmenu = function(item) {
					$scope.data.button = _.without($scope.data.button, item);
				};
				$scope.removeSubmenu = function(topmenu, submenu) {
					topmenu.sub_button = _.without(topmenu.sub_button, submenu);
				};
			}]);