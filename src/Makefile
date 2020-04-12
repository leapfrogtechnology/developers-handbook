filename=main

pdf:
	pdflatex -synctex=1 -interaction=nonstopmode ${filename}.tex
	biber ${filename}
	pdflatex -synctex=1 -interaction=nonstopmode ${filename}.tex
	pdflatex -synctex=1 -interaction=nonstopmode ${filename}.tex
	mkdir -p build/
	mv build/developers_handbook.pdf build/$$(date +%Y%m%d%H%M%S)_handbook.pdf 2>/dev/null; true
	mv main.pdf build/developers_handbook.pdf

release:
	make pdf
	cp build/developers_handbook.pdf ../developers_handbook_lf.pdf


clean:
	rm -f ${filename}.{ps,pdf,log,aux,out,dvi,bbl,blg,synctex.gz,toc,bcf,run.xml,tex.bbl,tex.blg}
	rm -f ${filename}-blx.bib
