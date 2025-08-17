export default function TypographyShowcase() {
    return (
      <div className="p-10 space-y-12">
        {/* Headings */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Headings</h2>
          <div className="space-y-4">
            <div className="text-hero text-primary">Hero Heading</div>
            <div className="text-h1 text-primary">Heading H1</div>
            <div className="text-h2 text-primary">Heading H2</div>
            <div className="text-h3 text-primary">Heading H3</div>
            <div className="text-h4 text-primary">Heading H4</div>
            <div className="text-h5 text-primary">Heading H5</div>
            <div className="text-h6 text-primary">Heading H6</div>
            <div className="text-h7 text-primary">Heading H7</div>
          </div>
        </section>
  
        {/* Body Text */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Body Text</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="text-text1">Text 1 (400)</p>
              <p className="text-text2">Text 2 (400)</p>
              <p className="text-text3">Text 3 (400)</p>
              <p className="text-text4">Text 4 (400)</p>
              <p className="text-text5">Text 5 (400)</p>
              <p className="text-text6">Text 6 (400)</p>
              <p className="text-text7">Text 7 (400)</p>
            </div>
            <div className="space-y-2">
              <p className="text-text8">Text 8 (600)</p>
              <p className="text-text9">Text 9 (600)</p>
              <p className="text-text10">Text 10 (600)</p>
              <p className="text-text11">Text 11 (600)</p>
              <p className="text-text12">Text 12 (600)</p>
              <p className="text-text13">Text 13 (600)</p>
              <p className="text-text14">Text 14 (600)</p>
            </div>
            <div className="space-y-2">
              <p className="text-text15">Text 15 (700)</p>
              <p className="text-text16">Text 16 (700)</p>
              <p className="text-text17">Text 17 (700)</p>
              <p className="text-text18">Text 18 (700)</p>
              <p className="text-text19">Text 19 (700)</p>
              <p className="text-text20">Text 20 (700)</p>
              <p className="text-text21">Text 21 (700)</p>
            </div>
          </div>
        </section>
  
        {/* Buttons */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <button className="text-button-xl bg-secondary-blue text-white px-6 py-3 rounded-lg">
              Button XL
            </button>
            <button className="text-button-lg bg-secondary-green text-white px-6 py-3 rounded-lg">
              Button LG
            </button>
            <button className="text-button-md bg-secondary-orange text-white px-6 py-3 rounded-lg">
              Button MD
            </button>
            <button className="text-button-sm bg-secondary-red text-white px-6 py-3 rounded-lg">
              Button SM
            </button>
            <button className="text-button-xs bg-primary text-white px-6 py-3 rounded-lg">
              Button XS
            </button>
          </div>
        </section>
      </div>
    );
  }
  