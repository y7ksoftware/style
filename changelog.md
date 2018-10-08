# Y7K Style Changelog

## Version 1.0.* - 2018-10-08
* Updated Versioning to include major releases
* Completely refactor SCSS folder structure
    - modules -> components
    - settings -> variables
    - tools -> mixins
    - generic & elements -> boot
    - /global now contain anything global (not component/page related)
* Add /pages folder
* Add more example code
* Remove Utlities
* Add Stylelint


## Version 0.4.*
* Update Packages
* Removed dialog(size) helper
* Output spacings as REM
* Output responsive properties as REM
* Renamed `source` folder to `src`

## Version 0.3.*
* Add completely new, responsive spacing system with spacings() mixins
* Add completely new susy grid implementation with responsive gutters
* Add pageContainer as independent replacement of grid-container()
* Remove "bp-" prefix from breakpoint names
* Update breakpoint sizes
* Add settings file for measurements
* Add rules for better keybord focus outlining (works with keyboardFocusOutliner.js)
* Add rules for Debug Grid (works with debugGrid.js)

## Version 0.2.*
* Restructure Elements & Generic
* Create Tool Mixin for grid container
* Allow Wildcard SCSS imports with SCSS Globbing (use webpack import-glob)

## Version 0.1.*
* First Version, based on the Y7K plate.
