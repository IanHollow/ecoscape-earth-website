export default function AboutPage() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="container mx-auto text-center">
        <h1 className={`text-5xl font-bold p-5`}>About</h1>
        <div className="text-left container-md mx-auto space-y-3">
          <h2>Publications</h2>
          <ul>
            <li>
              Natalia Ocampo-Peñuela, Coen Adler, Artie Nazarov, Jasmine Tai,
              Natalie Valett, Luca de Alfaro.{" "}
              <a href="https://tr.soe.ucsc.edu/research/technical-reports/UCSC-SOE-23-10">
                Diffusion Models For Species-Specific Functional Habitat
                Connectivity
              </a>
              . Technical Report UCSC-SOE-23-10, 2023.{" "}
              <a href="https://github.com/ecoscape-earth/ecoscape-connectivity-paper-reproduction">
                Reproduction material
              </a>
              .
            </li>
          </ul>
          <h2>Code Repositories</h2>
          <ul>
            <li>
              <a href="https://github.com/ecoscape-earth/scgt">scgt</a>, the UC
              Santa Cruz Geographical Toolkit, contains functions for working
              with geotiff files.
            </li>
            <li>
              <a href="https://github.com/ecoscape-earth/ecoscape-layers">
                ecoscape-layers
              </a>{" "}
              contains functions for generating habitat and landcover layers for
              bird species.
            </li>
            <li>
              <a href="https://github.com/ecoscape-earth/ecoscape-connectivity">
                ecoscape-connectivity
              </a>{" "}
              is the tool for computing habitat connectivity.
            </li>
            <li>
              <a href="https://github.com/ecoscape-earth/ecoscape-utils">
                ecoscape-utils
              </a>{" "}
              is a collection of utilities that facilitate working on habitats
              and landscapes.
            </li>
          </ul>
          <p>
            The above code can be installed via{" "}
            <code className="bg-code-highlight code-highlight">pip</code>, e.g.,{" "}
            <code className="bg-code-highlight code-highlight">
              pip install ecoscape-connectivity
            </code>
            .
          </p>
          <h2>Sample Colab Notebooks</h2>
          <p>
            Some of the EcoScape software (such as connectivity computation)
            benefits from GPUs. On{" "}
            <a href="https://colab.research.google.com">Google Colab</a>, you
            can use GPUs for free, or at low cost. The following Python
            notebooks, on Google Colab, demonstrate the EcoScape tools:
          </p>
          <ul>
            <li>
              <a href="https://drive.google.com/file/d/1Pz6lLyIs8Ju2UGkNtZqcNR72cFzn8UYc/view?usp=sharing">
                EcoScape Connectivity Computation
              </a>
              . The notebook shows how to run the EcoScape Connectivity
              computation given input habitat and landcover layers.
            </li>
            <li>
              <a href="https://colab.research.google.com/drive/1Aby8VqaSMgYySxsLPXfsVgdvZvCFRUtI?usp=sharing">
                EcoScape Layer Generation and Connectivity Computation
              </a>
              . The notebook does the process of studying the connectivity for a
              species from beginning to end: it computes habitat and landcover
              layers from IUCN data, and analyzes the connectivity using the
              EcoScape algorithm.
            </li>
          </ul>
          <ul></ul>
          <h2>Project Members</h2>
          <div className="space-y-3">
            <h3>Faculty</h3>
            <ul>
              <li>Luca de Alfaro (luca@ucsc.edu)</li>
              <li>Natalia Ocampo-Peñuela (nocampop@ucsc.edu)</li>
              <li>Tyler Sorensen (tyler.sorensen@ucsc.edu)</li>
            </ul>
            <h3>Contributors</h3>
            <ul>
              <li>Coen Adler (ctadler@ucsc.edu)</li>
              <li>Artie Nazarov (anazarov@ucsc.edu)</li>
              <li>Jasmine Tai (cjtai@ucsc.edu)</li>
              <li>Ian Terry (imterry@ucsc.edu)</li>
              <li>Natalie Valett (nvalett@ucsc.edu)</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
