const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"用户管理",
			            "menuJump":"列表",
			            "tableName":"yonghu"
			        }
			    ],
			    "menu":"用户管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"教练管理",
			            "menuJump":"列表",
			            "tableName":"jiaolian"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "修改",
			                "删除"
			            ],
			            "menu":"教练留言管理",
			            "menuJump":"列表",
			            "tableName":"jiaolianLiuyan"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "删除"
			            ],
			            "menu":"教练收藏管理",
			            "menuJump":"列表",
			            "tableName":"jiaolianCollection"
			        }
			    ],
			    "menu":"教练管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "删除"
			            ],
			            "menu":"教练预约管理",
			            "menuJump":"列表",
			            "tableName":"jiaolianYuyue"
			        }
			    ],
			    "menu":"教练预约管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"车辆管理",
                        "menuJump":"列表",
                        "tableName":"cheliang"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"车辆留言管理",
                        "menuJump":"列表",
                        "tableName":"cheliangLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"车辆收藏管理",
                        "menuJump":"列表",
                        "tableName":"cheliangCollection"
                    }
                ],
                "menu":"车辆管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "审核",
                            "删除"
                        ],
                        "menu":"车辆预约管理",
                        "menuJump":"列表",
                        "tableName":"cheliangYuyue"
                    }
                ],
                "menu":"车辆预约管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"车辆类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryCheliang"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"教练类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryJiaolian"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"公告类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryNews"
			        }
			    ],
			    "menu":"基础数据管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"论坛管理",
			            "menuJump":"列表",
			            "tableName":"forum"
			        }
			    ],
			    "menu":"论坛管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告资讯管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"公告资讯管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
            /*,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"数据备份",
			            "menuJump":"列表",
			            "tableName":"beifen"
			        },
					{
					    "buttons":[
					        "查看"
					    ],
					    "menu":"数据还原",
					    "menuJump":"列表",
					    "tableName":"huanyuan"
					}
			    ],
			    "menu":"数据库管理"
			}*/
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
	{
	    "backMenu":[
	        {
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "修改",
			                "删除"
			            ],
			            "menu":"教练留言管理",
			            "menuJump":"列表",
			            "tableName":"jiaolianLiuyan"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			            ],
			            "menu":"教练收藏管理",
			            "menuJump":"列表",
			            "tableName":"jiaolianCollection"
			        }
			    ],
			    "menu":"教练管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "审核",
			                "删除"
			            ],
			            "menu":"教练预约管理",
			            "menuJump":"列表",
			            "tableName":"jiaolianYuyue"
			        }
			    ],
			    "menu":"教练预约管理"
			}
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                    ],
	                    "menu":"车辆管理",
	                    "menuJump":"列表",
	                    "tableName":"cheliang"
	                }
	                ,
	                {
	                    "buttons":[
	                        "查看",
	                    ],
	                    "menu":"车辆留言管理",
	                    "menuJump":"列表",
	                    "tableName":"cheliangLiuyan"
	                }
	                ,
	                {
	                    "buttons":[
	                        "查看",
	                    ],
	                    "menu":"车辆收藏管理",
	                    "menuJump":"列表",
	                    "tableName":"cheliangCollection"
	                }
	            ],
	            "menu":"车辆管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "审核",
	                    ],
	                    "menu":"车辆预约管理",
	                    "menuJump":"列表",
	                    "tableName":"cheliangYuyue"
	                }
	            ],
	            "menu":"车辆预约管理"
	        }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除"
			            ],
			            "menu":"论坛管理",
			            "menuJump":"列表",
			            "tableName":"forum"
			        }
			    ],
			    "menu":"论坛管理"
			}
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"公告资讯管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"公告资讯管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"教练",
	    "tableName":"jiaolian"
	}
]
    }
}
export default menu;
