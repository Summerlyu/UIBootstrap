var setting = {
	view : {
		selectedMulti : false
	},
	data : {
		simpleData : {
			enable : true
		}
	},
	edit : {
		enable : false
	},
	callback : {
		onClick : onClick
	},
	check : {
		enable : true
	}
};

var setting1 = {
	data : {
		simpleData : {
			enable : true
		}
	},
	edit : {
		enable : true,
		removeTitle : "删除",
		showRenameBtn : false
	},
	callback : {
		onRemove : onRemove
	}
};

var zNodes;
var log, className = "dark";
var key;
var selectedNode;

// 回调函数(添加，删除，修改)
function beforeRemove(treeId, treeNode) {
	className = (className === "dark" ? "" : "dark");
	var zTree = $.fn.zTree.getZTreeObj("treeDemo");
	zTree.selectNode(treeNode);
	// return confirm("确认删除 节点 -- " + treeNode.name + " 吗？");
	myConfirm();
	return statu;
}

function onRemove(e, treeId, treeNode) {
	// alert(treeNode.tId + ", " + treeNode.name);
}

function onRename(e, treeId, treeNode) {
	alert(treeNode.tId + ", " + treeNode.name);
}

// 点击事件
function onClick(e, treeId, treeNode) {
	// alert(treeNode.tId + ", " + treeNode.name);
	var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
	// 获取单选被选中的节点
	var nodes = treeObj.getSelectedNodes();
	// 获取多选被选中的节点
	// var nodes = treeObj.getCheckedNodes(true);
	selectedNode = nodes;
};

/*
 * 回调函数(拖拽)
 */
/**
 * 在拖拽结束之前触发
 */

var statu = false;

function beforeDrop(treeId, treeNodes, targetNode, moveType) {
	// return !(targetNode == null || (moveType != "inner" &&
	// !targetNode.parentTId));
	myConfirm();
	return statu;
};

function deleteonClick() {
	$.ajax({
		type : "post",
		url : "#",
		data : "schemaID=",
		error : function(xhr, e) {
			$('#deleteConfirmModel').modal('hide');
			statu = false;
		},
		success : function(msg) {
			$('#deleteConfirmModel').modal('hide');
			statu = true;
		},
		complete : function(xhr, result) {

		}
	});
}

function myConfirm() {
	$('#deleteConfirmModel').modal('show');
}

// 样式改变
var newCount = 1;
/**
 * 增加一个添加按钮，并增添相应事件
 * 
 * @param treeId
 * @param treeNode
 */
function addHoverDom(treeId, treeNode) {
	var sObj = $("#" + treeNode.tId + "_span");
	if (treeNode.editNameFlag || $("#addBtn_" + treeNode.id).length > 0)
		return;
	var addStr = "<span class='button add' id='addBtn_" + treeNode.id
			+ "' title='添加节点' onfocus='this.blur();'></span>";
	sObj.after(addStr);
	var btn = $("#addBtn_" + treeNode.id);
	if (btn)
		btn.bind("click", function() {
			var zTree = $.fn.zTree.getZTreeObj("treeDemo");
			zTree.addNodes(treeNode, {
				id : (100 + newCount),
				pId : treeNode.id,
				name : "new node" + (newCount++)
			});
			return false;
		});
};
/**
 * 移除样式
 * 
 * @param treeId
 * @param treeNode
 */
function removeHoverDom(treeId, treeNode) {
	$("#addBtn_" + treeNode.id).unbind().remove();
};

/**
 * 搜索
 */

function focusKey(e) {
	if (key.hasClass("empty")) {
		key.removeClass("empty");
	}
}
function blurKey(e) {
	if (key.get(0).value === "") {
		key.addClass("empty");
	}
}
var lastValue = "", nodeList = [], fontCss = {};
function clickRadio(e) {
	lastValue = "";
	searchNode(e);
}
function searchNode(e) {
	var zTree = $.fn.zTree.getZTreeObj("treeDemo");
	var value = $.trim(key.get(0).value);
	var keyType = "";
	keyType = "name";
	if (key.hasClass("empty")) {
		value = "";
	}
	if (lastValue === value)
		return;
	lastValue = value;
	if (value === "")
		return;
	updateNodes(false);
	nodeList = zTree.getNodesByParamFuzzy(keyType, value);
	updateNodes(true);

}
function updateNodes(highlight) {
	var zTree = $.fn.zTree.getZTreeObj("treeDemo");
	for ( var i = 0, l = nodeList.length; i < l; i++) {
		nodeList[i].highlight = highlight;
		zTree.updateNode(nodeList[i]);
	}
}
function getFontCss(treeId, treeNode) {
	return (!!treeNode.highlight) ? {
		color : "#A60000",
		"font-weight" : "bold"
	} : {
		color : "#333",
		"font-weight" : "normal"
	};
}
function filter(node) {
	return !node.isParent && node.isFirstNode;
}

function addToTree() {
	var treeObj0 = $.fn.zTree.getZTreeObj("treeDemo");
	var nodes = treeObj0.getCheckedNodes(true);
	var children = getAllChildrenNodes(nodes);
	var zTree = $.fn.zTree.getZTreeObj("treeSelects");
	
	if (zTree == null) {
		// $.fn.zTree.init($("#treeSelects"), setting, selectedNode);
		$.fn.zTree.init($("#treeSelects"), setting1, children[0]);
	} else {
		if (zTree.getNodes().length > 0) {
			$('#addToTreeModal').modal('show');
		} else if (children.length > 1&&zTree.getNodes().length==0) {
			$('#addToTreeModal').modal('show');
			zTree.addNodes(null, children[0]);
		} 
	}
}

function getAllChildrenNodes(nodes) {
	var result = new Array();
	for ( var i = 0; i < nodes.length; i++) {
		if (!nodes[i].halfCheck) {
			if (!nodes[i].isParent) {
				result.push(nodes[i]);
			}
		}
	}
	return result;
}

function startClass() {
	var myform = document.getElementById("resultForm");
	var mytree = $.fn.zTree.getZTreeObj("treeSelects");
	if (mytree != null) {
		var nodes = mytree.getNodes();
		for ( var i = 0; i < nodes.length; i++) {
			var forinsertName = document.createElement("input");
			var forinsertID = document.createElement("input");
			forinsertName.type = "hidden";
			forinsertName.name = "trsTask";
			forinsertName.value = nodes[i].name;
			myform.appendChild(forinsertName);
			forinsertID.type = "hidden";
			forinsertID.name = "taskIDStr";
			forinsertID.value = nodes[i].id;
			myform.appendChild(forinsertID);
		}
	}
	myform.submit();
}

/*
 * function startClass() { var mytree = $.fn.zTree.getZTreeObj("treeSelects");
 * if (mytree != null) { var nodes = mytree.getNodes(); // var nodes =
 * mytree.transformToArray(mytree.getNodes()); if (nodes != null) { $.ajax({
 * type : "post", url : "inTutoring.action?course.courseID=1", data :
 * "selectedKnowledgeResult="+objectToArray(nodes), data : objectToArray(nodes),
 * error : function(xhr, e) { }, success : function(msg) { window.location.href =
 * "SelectedCourseAction.action"; }, complete : function(xhr, result) { } }); } //
 * 提交獲得結果 } }
 */

// 加载文档和数据
$(document).ready(
		function() {

			key = $("#key");
			key.bind("focus", focusKey).bind("blur", blurKey).bind(
					"propertychange", searchNode).bind("input", searchNode);

			/*
			 * $.post("CourseClassificationSelect", {}, function(data, status) {
			 * $.fn.zTree.init($("#treeDemo"), setting, data.list); })
			 */
		});