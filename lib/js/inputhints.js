/******************************** INPUT HINTS *******************************/

/**
*
* Copyright 2012, Pixopunch
* http://www.pixopunch.com/
*
* {Class}
* InputHints
* -destroy():void
* -init(pTarget, pParam_obj):void
*
* {Events}
*
*/

InputHints.prototype.mInputHints = null;

function InputHints()
{
}

InputHints.prototype.destroy = function()
{
	this.mInputHints.children(".hints").unbind("click");
	this.mInputHints.children("input, textarea").unbind("focus");
	this.mInputHints.children("input, textarea").unbind("blur");

	this.mInputHints = null;
};

InputHints.prototype.init = function(pTarget, pParam_obj)
{
	var _self = this;

	this.mInputHints = pTarget;

	this.mInputHints.children(".hints").bind("click", function(){_self.doFocusBegin();});
	this.mInputHints.children("input, textarea").bind("focus", function(){_self.focusBegin();});
	this.mInputHints.children("input, textarea").bind("blur", function(){_self.focusEnd();});

	this.mInputHints.children(".hints").css("display", "none");
	this.focusEnd();
};

InputHints.prototype.doFocusBegin = function()
{
	this.mInputHints.children("input, textarea").focus();
	this.focusBegin(this.mInputHints.children("input, textarea"));
};

InputHints.prototype.focusBegin = function()
{
	this.mInputHints.children(".hints").css("display", "none");
};

InputHints.prototype.focusEnd = function()
{
	if (this.mInputHints.children("input, textarea").val() === "")
	{
		this.mInputHints.children(".hints").css("display", "block");
	}
};
