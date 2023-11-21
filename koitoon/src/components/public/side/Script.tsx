import Script from 'next/script';


export default function ScriptCode() {
  return (
    <>
      <Script
        strategy="beforeInteractive"
      />
    </>
  );
}
