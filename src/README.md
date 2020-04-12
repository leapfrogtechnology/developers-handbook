## Organization

The hosted pdf is in the root directory and is called

`developers_handbook_lf.pdf`

The source of the file is in `src` folder and is written in latex

`cd src`

## Prerequisites

* pdflatex
* biber
* Texmaker (or any other latex editor)

## Building The Document

**Compile to PDF**

`$ make pdf`

This runs [*pdflatex*, *biber*, *pdflatex*, *pdflatex*], a command that is available by default in most graphical LaTex editors.

The compiled pdf can be found in the src/directory

**Clean temporary files**

`$ make clean`

## The Structure of src

* tex/appendices/ *(add all your appendices here)*
    * **example_image1.tex**
    * **example_image2.tex**
    * ***[another appendix]*.tex**
* assets/ *(add all your assets here)*
    * **image1.jpg**
    * **image2.jpg**
    * **frontpage.png**
    * ***[another asset]*.png**
* tex/chapters/ *(add all your chapters here)*
    * **example_text.tex**
    * **example_math.tex**
    * **example_code.tex**
    * **example_citation.tex**
    * **example_table.tex**
    * ***[another chapter]*.tex**
* tex/config/
    * **globals.tex** *(variables/settings)*
    * **style.sty** *(the document style/design)*
* **main.tex** *(defines the document structure)*
* **tex/titlepage.tex** *(the title page)*
* **tex/copyright.tex** *(the copyright page)*
* **tex/abstract.tex** *(the abstract/summary)*
* **tex/references.bib** *(the references library)*

## Issues

Issues or new features can be reported via the GitHub issue tracker. Please make sure your issue or feature has not yet been reported by anyone else before submitting a new one.

## License

This repository should be used within Leapfrog only
