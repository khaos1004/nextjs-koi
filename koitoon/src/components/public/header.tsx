const Head: string = () => {
    return (
        <> 
            < div className = "container mx-auto p-8" > <div id="content1" className="hidden p-6 m-6 bg-white shadow-lg rounded">Content 1</div>
                <div id="content2" className="hidden p-6 m-6 bg-white shadow-lg rounded">Content 2</div>
                <div id="content3" className="hidden p-6 m-6 bg-white shadow-lg rounded">Content 3</div>
            </div>

    {/* <script>window.addEventListener(
            'scroll',
            () => {
                document
                    .querySelectorAll('.hidden')
                    .forEach((el, i) => {
                        const windowHeight = window.innerHeight;
                        if (topPosition < windowHeight) {
                            el
                                .classNameList
                                .add('visible');
                        }
                    });
            }
        );
        </script> */}
    </>
    )
}