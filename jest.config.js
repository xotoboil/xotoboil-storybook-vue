module.exports = {
	preset: "ts-jest",
	moduleNameMapper: {"@/(.*)$": "<rootDir>/src/$1"},
	transform: {"^.+\\.vue$": "@vue/vue3-jest"},
	testEnvironment: "jsdom",
	moduleFileExtensions: ["js", "ts", "json", "vue"],
	testEnvironmentOptions: {
		customExportConditions: ["node", "node-addons"],
	},
};
