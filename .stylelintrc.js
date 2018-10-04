module.exports = {
    extends: "stylelint-config-sass-guidelines",

    rules: {
        indentation: 4,
        "max-empty-lines": 2,
        "at-rule-no-unknown": null,
        "at-rule-empty-line-before": null,
        "length-zero-no-unit": null,
        "order/properties-alphabetical-order": null,
        "selector-pseudo-element-colon-notation": "single",
        "selector-class-pattern": "^(?!-)(?!.*--)(?!.*-.*-.*-)[a-z]+([a-zA-Z0-9-])+$",
        // "scss/dollar-variable-pattern": "^[a-z]+([a-z0-9-]*[a-z0-9]+)?$",
        // "scss/at-mixin-pattern": "^[a-z]+([a-z0-9-]*[a-z0-9]+)?$",
        "color-named": null,
        "scss/at-import-no-partial-leading-underscore": null,
        "scss/at-import-partial-extension-blacklist": null,
        "shorthand-property-no-redundant-values": null,
        "selector-no-qualifying-type": [true, {
            "ignore": "attribute",
        }],
        "block-no-empty": null,


        "max-nesting-depth": [
            1,
            {
                ignoreAtRules: ["media", "supports", "include", "if", "else"]
            }
        ],

        "order/properties-order": [
            "position",
            "display",
            "top",
            "right",
            "bottom",
            "left",
            "width",
            "height",
            "max-width",
            "max-height",
            "margin",
            "margin-top",
            "margin-bottom",
            "margin-left",
            "margin-right",
            "padding",
            "padding-top",
            "padding-bottom",
            "padding-left",
            "padding-right",
            "transform",
            "border",
            "border-top",
            "border-bottom",
            "border-left",
            "border-right",
            "border-color",
            "color",
            "background",
            "background-color",
            "background-image",
            "background-size",
            "background-repeat",
            "background-position",
            "font-size",
            "font-weight",
            "font-style",
            "text-decoration"
        ],

        "order/order": [
            [
                "custom-properties",
                "dollar-variables",
                {
                    type: "at-rule",
                    name: "extend"
                },
                {
                    type: "at-rule",
                    name: "include",
                    hasBlock: false
                },
                "declarations",
                {
                    type: "at-rule",
                    name: "include",
                    hasBlock: true
                },

                {
                    type: "at-rule",
                    name: "include",
                    parameter: "mq",
                    hasBlock: false
                },

                "rules"
            ]
        ]
    }
};
