import React, { ChangeEvent, useState, useRef, useEffect } from 'react';
import { Transformer } from 'markmap-lib';
//import { Markmap, IMarkmapOptions } from 'markmap-view';
import { Markmap } from 'markmap-view';

type Props = {
  content: string,
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const transformer = new Transformer();
// const markmapOptions: IMarkmapOptions = {
//   autoFit: false,
//   duration: 500,
//   embedGlobalCSS: true,
//   fitRatio: 0.5,
//   maxWidth: 1000,
//   nodeMinHeight: 30,
//   paddingX: 20,
//   scrollForPan: true,
//   spacingHorizontal: 20,
//   spacingVertical: 10,
//   initialExpandLevel: 2,
//   zoom: true,
//   pan: true,
// };

export default function MarkmapHooks({ content }: Props) {
  const [value, setValue] = useState(content);
  // Ref for SVG element
  const refSvg = useRef(null);
  // Ref for markmap object
  const refMm = useRef(null);

  useEffect(() => {
    // Create markmap and save to refMm
    if (refMm.current) return;
    refMm.current = Markmap.create(refSvg.current);
  }, [refSvg.current]);

  useEffect(() => {
    console.log(content)
    // Update data for markmap once value is changed
    const mm = refMm.current;
    if (!mm) return;
    const { root } = transformer.transform(value);
    mm.setData(root);
    mm.fit();
  }, [refMm.current, value]);

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setValue(e.target.value);
  };

  return (
    <React.Fragment>
      
        <svg className="flex-1" ref={refSvg} />
      
    </React.Fragment>
  );
}
