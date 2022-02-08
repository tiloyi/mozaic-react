module.exports = {
    stylelint: {
        disabled: true
    },
    preset: "adeo",
    tokens: {
        localTokensExportPath:
            process.env.MOZAIC_PRESET === 'adeo' ? './src/assets/adeo/' : '',
    },
};