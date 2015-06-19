cordova.define("cordova/plugin/cdvsharedpreferences", function(require,
		exports, module) {
	var exec = require("cordova/exec");
	var SharedPreferences = function() {
	};

	var AppPreferencesError = function(code, message) {
		this.code = code || null;
		this.message = message || '';
	};

	AppPreferencesError.NO_PROPERTY = 0;
	AppPreferencesError.NO_PREFERENCE_ACTIVITY = 1;

	/**
	 * Get the value of the named property.
	 * 
	 * @param key
	 */
	SharedPreferences.prototype.get = function(key, success, fail) {
		exec(success, fail, "cdvSharedPreferences", "get", [ key ]);
	};

	/**
	 * Set the value of the named property.
	 * 
	 * @param key
	 * @param value
	 */
	SharedPreferences.prototype.set = function(key, value, success, fail) {
		exec(success, fail, "cdvSharedPreferences", "set", [ key, value ]);
	};

	/**
	 * Get all the preference values.
	 * 
	 */
	SharedPreferences.prototype.load = function(success, fail) {
		exec(success, fail, "cdvSharedPreferences", "load", []);
	};

	/**
	 * Get all the preference values.
	 * 
	 */

	SharedPreferences.prototype.show = function(activity, success, fail) {
		exec(success, fail, "cdvSharedPreferences", "show", [ activity ]);
	};
	/**
	 * Clear all shared preferences
	 * 
	 */
	SharedPreferences.prototype.clear = function(success, fail) {
		exec(success, fail, "cdvSharedPreferences", "clear", []);
	};

	/**
	 * Remove the key along with the value
	 * 
	 * @param key
	 */
	SharedPreferences.prototype.remove = function(keyToRemove, success, fail) {
		exec(success, fail, "cdvSharedPreferences", "remove", [ keyToRemove ]);
	};

	var sharedPreferences = new SharedPreferences();
	module.exports = sharedPreferences;
});

if (!window.plugins) {
	window.plugins = {};
}
if (!window.plugins.cdvSharedPreferences) {
	window.plugins.cdvSharedPreferences = cordova
			.require("cordova/plugin/cdvsharedpreferences");
}