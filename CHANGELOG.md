# [3.1.0](https://github.com/YannickFricke/use-repository/compare/v3.0.0...v3.1.0) (2021-02-17)


### Features

* **uselocalstoragerepository:** added the id field feature ([d3392e7](https://github.com/YannickFricke/use-repository/commit/d3392e7db9f64754bc2a414a87fa5a0c5809fd0e))
* **usesyncedlocalstoragerepository:** added the id field feature ([8e94425](https://github.com/YannickFricke/use-repository/commit/8e9442575951e04386a3b756b59d29407826d785))

# [3.0.0](https://github.com/YannickFricke/use-repository/compare/v2.0.1...v3.0.0) (2021-02-17)


### Code Refactoring

* **index:** export the useSyncedLocalStorageRepository and types ([fe7aeb6](https://github.com/YannickFricke/use-repository/commit/fe7aeb6e0f3574661b335eda6652725ba8c75da8))


### BREAKING CHANGES

* **index:** Removed the default export

## [2.0.1](https://github.com/YannickFricke/use-repository/compare/v2.0.0...v2.0.1) (2021-02-17)


### Bug Fixes

* **ci#release:** refactored the release step and bump for the version ([94498cf](https://github.com/YannickFricke/use-repository/commit/94498cf6bfe1e77f78eca5150977b6699608c619))

# [2.0.0](https://github.com/YannickFricke/use-repository/compare/v1.1.0...v2.0.0) (2021-02-17)


### Bug Fixes

* **irepository:** fixed the import statements + types refactor ([5fb052d](https://github.com/YannickFricke/use-repository/commit/5fb052d816f832c8b18335a877e8935df7dbe9ca))
* **uselocalstoragerepository:** fixed the useLocalStorageRepository hook ([4bad12e](https://github.com/YannickFricke/use-repository/commit/4bad12efa4d2b227415840b49b0f0162150e13a9))


### Code Refactoring

* **userepository:** removed the "Identifiable" interface and refactored hook ([70e9eb8](https://github.com/YannickFricke/use-repository/commit/70e9eb8a076738d23d0b5c4b45a12b148a11c452))


### Features

* **usesyncedlocalstoragerepository:** added the useSyncedLocalStorageRepository hook ([ee5f71c](https://github.com/YannickFricke/use-repository/commit/ee5f71c6909a630091c0c26fab0fcce213167be5))


### BREAKING CHANGES

* **userepository:** Removed the hard dependency to the "Identifiable"
interface

# [1.1.0](https://github.com/YannickFricke/use-repository/compare/v1.0.1...v1.1.0) (2021-02-17)


### Features

* **userepository:** added the idField parameter ([1721d53](https://github.com/YannickFricke/use-repository/commit/1721d53715d46fcb0d26fdc79654f49b70041dce))

## [1.0.1](https://github.com/YannickFricke/use-repository/compare/v1.0.0...v1.0.1) (2021-02-17)


### Bug Fixes

* **index:** fixed the imports ([ee31ec9](https://github.com/YannickFricke/use-repository/commit/ee31ec9105c177809e818a87fd3912571f93672f))

# 1.0.0 (2020-09-13)


### Features

* **hooks:** added the useLocalStorageRepository hook ([1eeda57](https://github.com/YannickFricke/use-repository/commit/1eeda578a4202c8d1cbd7406d5887b9c1f18aed1))
* **identifiable:** added the Identifiable interface ([3488447](https://github.com/YannickFricke/use-repository/commit/3488447978ba9625e29bab614aa20aa5d7de6c30))
* **irepository:** added the "getAll" function ([9a06c97](https://github.com/YannickFricke/use-repository/commit/9a06c97fa395cd89077c93b93884ef56424cffae))
* **irepository:** extracted the type of the repository ([00ba586](https://github.com/YannickFricke/use-repository/commit/00ba586ba0d028b4346b8351446aaaad9d8f88a5))
