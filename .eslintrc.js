module.exports = {
    "extends": [
        "airbnb-base"
    ],
     // required to lint *.vue files
    "plugins": [
        'vue'
    ],
    "rules": {
        "indent": [2, 4],
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": true, "peerDependencies": true}]
    }
};