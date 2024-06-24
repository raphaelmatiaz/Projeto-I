


console.log('This is JS from WebComponents')

const Foldertemplate = document.createElement('template');

Foldertemplate.innerHTML = `



    <div class="web-folder-wrapper">
    
                    <div class="subwrapper-1 subwrapper">
                        <div class="svg-wrapper">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="36" height="36" fill="url(#pattern0_94_382)"/>
                                <defs>
                                <pattern id="pattern0_94_382" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_94_382" transform="scale(0.0111111)"/>
                                </pattern>
                                <image id="image0_94_382" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsklEQVR4nO2csU0DQQAEJwJ6gIgu6IFOwHYPRKYScooAHAEtIAExAokIHXrphRwh/Mi39/4ZaXPfaL3+D3wgIiIiIiIyYg6ABbACPoAyMF/AE3AFnKQP1RpHwOM/5P4m/SJ9uJaavA3JZS1n6UO2wGLLkgvwCRwzcVYVRBfgmonzXkl0AU6ZMLUkl5GmewK7A+bAvqKpIv2hf0Kz0dSRPajZ6a9mGWFmiqaK6FtFU0V096TmdFBHtqJRNJNutIiIiEgd9oBL4KWBR6bSeJ6BZe9sY5YNHKCMLJ2zjbHJbCz6dYjodDvKSKNoFE26hTaavDing7xUNxpFk26cjSYvyekgL9CNpq34woKiSbfQRpMX53SQl+pGo2jSjbPR5CU5HeQFutG0FV9YUDTpFtpo8uKcDvJS3WgUTbpxNpq8JKeDvEA3mrbiCwuKJt1CG01enNNBXqobjaJJN85Gk5fkdLDDG13zOrayI3lr+YLBMvWrfuYNfPAyspwPEb3fXzGW/vBlJLkf+s9Z+kvzlM2fJB8Olbze7Fm/P/5A8iO3c3HTz8XgJouIiIiIiIiIiIgwDb4B6mvZG8Gptm8AAAAASUVORK5CYII="/>
                                </defs>
                                </svg>
                        </div>
                        <p class="folder-name" data-folder-name=""></p>
                    </div>
    
                    <div class="subwrapper-2 subwrapper">
                        <div id="download-svg-wrapper">
                            <div class="svg-wrapper">
                                <svg id="download-svg" class="web-component-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect width="36" height="36" fill="url(#pattern0_94_384)"/>
                                    <defs>
                                    <pattern id="pattern0_94_384" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlink:href="#image0_94_384" transform="scale(0.0111111)"/>
                                    </pattern>
                                    <image id="image0_94_384" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEYUlEQVR4nO2dTY9URRSGn2TAwWBw6QyQoAH/gMoKDYQAHRZEXIjJIEZB3GAiamDGnTuBFZmEvwGICwj+AAmBjMCGjYaFaARmwJXdyTBlyhyTsdN1u6en6lTd2+dJTtLpj3vPeVO3Pk9Vg2EYhmEYhmEYhjEwY8B24BhwDrgM3AV+ARaAjtiCvHdXvnNWfvOWXMPowWbgJPAD8BfgVmnPgCvAF8AmRpwXgSPAj8DzCOKGbBG4DnwIrGOEeElK2sOE4obsEfAt8DINZi1wCpjPIHC3eR++Fp8axTvAvQIE7rb7wB4agK8TLwBLBYgaMu/bLDBOTXkVuFGAkG5Auw1so2bsidRNc8rmu4W7qQnvAX8XIJob0vxg6AMK57PEfWKnZD6G4xTKQRkc5BbJRRT7EIXh67V2AeK4BNXIPgrh9Zo2fG4FDeTW3CKPS7fINdxu5e5nX1AMtg2cBjaKTcujrXV/P6jJwk7lEd/pHj5MK97fx/q2tshrgDuKQTpgsocfE8o+3NOeiDqlHKCr8EXbjy8155OfjLDQT0SD5GjWi65AoZ3MZSef9vzdhOYPWYpLxkeZRHYVPuXyZyql0H4h1YTmXw2uphJ5U+ZJoxA5J52SpDKczBiUq/Arp0+fpxDaJ7eY0PxPg4uxRfYpVk9NaLoL2tPY6WfbM5dmV+Fbbr/ejCn0pwUEFCK3X58QkXMFBBQit1/fEZHvCwgohGtSg6g9JepqJPRcTKEfFBBQiNx+/UpESsgADZHbr8dERHNtztVMaL+WaUJTM6Gt6kCn6rDGEJ3GMEX3riPLYhNi033SykJUPdLd1++U3r27nMDB6R732V8h9kqEbsu1upkpfcCSYgg+EbhXK5BfHaLXk3Ig8N1XSh+CH1MUOiR2iEFFRlLJYsfxMYVPk870uWd3NRKiX3WxnG8SxPEGERmT9NWYDrYHEGa52CGGuVYsW0ix7/xKgtLQ6fOoL69GQqzkGsUvZSHbimM76lZQGof57L/PU+1GOEECNiZMN+gMUCqHIVVJdqJFVYO+Kq4nctolEDulyEkTaJBjH1wNxG4p7HWcSp3k+LBwsVsKIidPctRKQu8MKbaGyN6+QoH1MjVYmtgtJZHVEtGRRGynYO0Bum+pu3Dd5ru5qpuFflYKrNOnZGuV5CybhZCtYEuZxW4pirwkW/6yMKsUpJOqYUa2wU3Ka8395+fJyLhs33UNt5vAC2Rma4KZPVeQ+dTc1yiEXTU/dcZVtA17KYx3G3gwyvsUyvGGHPWzKDnhRXOw5tVIu8QjfqqO/nlW04ZvFzVjC/BTAeK5Ae1WCUf6rKafPVuDIzPPl9BPjjVcv1OAqN3mfdpBw1gjh4poTLH2s8cyC+d9aizrJcjfMgj8pxzUvYERYh1wGLiWeKCzKAupU6N29HwvJmUD+yXJ/lmtuAtyrRMpUwLqzpjksx0Fzkg20Jz8Fcj8sr8HmZf35uQ7Z2QXq/+t/T2IYRiGYRiGYRgGA/IPd3ssawSM6QwAAAAASUVORK5CYII="/>
                                    </defs>
                                    </svg>
                            </div>
                        </div>
    
    
                            <div class="svg-wrapper">
                                <form id="new-folder-form" method="POST" action="{% url 'create_folder' %}">
                                
                                <input type="hidden" name="drive" value="{{ user.drive.id }}">
                                <button type="submit">
                                    <svg id="delete-svg" class="web-component-icon"  width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <rect width="36" height="36" fill="url(#pattern0_94_385)"/>
                                        <defs>
                                        <pattern id="pattern0_94_385" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlink:href="#image0_94_385" transform="scale(0.0111111)"/>
                                        </pattern>
                                        <image id="image0_94_385" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACNUlEQVR4nO2aS27UUBBFDwz4bYDvfqIM2AkwJWwCiZ9gRSBGYRcwIqAI6IweeoqJgpX+2P3iqrjPka7Ug/Zr+ai6/OwyiIiIiIiIyMbcAl4C34AyMF+7Y+sasobXIwT382rdj+w614CjBqJ/dGvNhjvAu+7EykxzBLwFbkeK/pBARJko9VxDuA78TiCgTJRf3TkrmpmK3rXW8Z5A6gXiTaOdQkma792WM/RiKCIiIjI9ZaZJR7SQomjCZVnRxIu0dZAj6YgWUhRNuCwrmniRtg5yJB3RQoqiCZdlRRMv0tZBjqQjWkhRNOGyrGhOJZwAz4F7XernxQhBiwvWqWsrmlMJVUif/YGyF90xfQ4UzZmkWn0XsQf82UBUrdrHS9a4q2jWit5E9irJlQeK5kxW/XuvYlkbWdYuzvNC0QwS1pc95pgxSce226iTNS3gfBsZ8l23d4xrBfsTVfJsK7oMqOwpKnn2ossWsltLnr3oMkL2ZUjeCdFlgOzLkqzoHoq2dbTHi+FERO84/uH2jvWSvWHZgCkqec9b8O0kL3yoFDdhafWY1AkL0zz4d8LCNKMsJyysnrC0Gs46YeH/iqyy73c52OJ1g/46vm7A1Ug6ooUURRMuy4omXqStgxxJR7SQomjCZVnRxIu0dZAj6ThOIKU0zk8S8jmBmNI4n0jIswRiSuM8ISE3gS8J5JRGOQRukJRHM5F9CDwkObWyn3b97SpdII+Bj127SFvJIiIiIiIiIiIk4C+afpdItrgk2wAAAABJRU5ErkJggg=="/>
                                        </defs>
                                        </svg>
                                </button>
                            </div>
    
                    </div>
                </div>



<style>

*, *:before, *after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.web-folder-wrapper {
    height: fit-content;
    max-height: fit-content;
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 1vw 0 1vw;
    background: var(--color-grey-1);
    border: 1px  solid var(--color-dark);

    
}

.web-folder-wrapper:hover {
    border: 1px solid var(--color-secondary);
    background-color: var(--color-primary)
    box-shadow: 1px 1px 5px var(--color-grey-2);
    cursor: pointer;
    color: var(--color-light);
    
}

.web-folder-wrapper svg {
    width: 100%;
    height: 100%;
}

.svg-wrapper {
    width: 2.4vw;
    height: 2.4vw;
}

.subwrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.subwrapper-1 {
    width: fit-content;
    gap: 1vw;
}

.web-component-icon {
    background-size: cover;
    background-repeat: no-repeat;
    transition: scale 0.2s ease-in-out;
}

.web-component-icon:hover {
    scale: 1.04;
    cursor: pointer;
}

.folder-name {
    margin: 1.832vh;
}
</style>


`

class DriveFolder extends HTMLElement {

    
    shadowRoot = null;

    constructor() {
        super()

        this.shadowRoot = this.attachShadow({ mode: 'closed' });
        this.shadowRoot.appendChild(Foldertemplate.content.cloneNode(true));
        
        const folderName = this.getAttribute('data-folder-name');

        const url = `{% url 'trigger_view' %}`;  // Assuming URL tag works in your component

        // Use POST to potentially send data later // Optionally add data to the request body (e.g., JSON data)
        fetch(url, { method: 'POST',})
        .then(response => response.text())
        .then(data => {
            console.log('View triggered:', data);  // Log the response from the view
        })
        .catch(error => {
            console.error('Error triggering view:', error);
        });
            
        }

    connectedCallback() {
        const folderName = this.getAttribute('data-folder-name');
        const folderNameText = this.shadowRoot.querySelector('.folder-name');
    
        // Check if element exists before setting content
        if (folderNameText) {
          folderNameText.textContent = folderName;
        } else {
          // Schedule a check for the element with a slight delay
          const self = this;  // Store reference to 'this' for callback
          setTimeout(function() {
            const folderNameText = self.shadowRoot.querySelector('.folder-name');
            if (folderNameText) {
              folderNameText.textContent = folderName;
            }
          }, 0);  // Schedule with minimal delay
        }
      }

}
customElements.define('drive-folder', DriveFolder)

// ------------------------------------------------------------------------------------------------


const Filetemplate = document.createElement('template');

console.log('This is JS from WebComponents')

Filetemplate.innerHTML = `


<div class="web-folder-wrapper">

    <div class="subwrapper-1 subwrapper">
        <div class="svg-wrapper">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="50" height="50" fill="url(#pattern0_61_239)"/>
                <defs>
                <pattern id="pattern0_61_239" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_61_239" transform="scale(0.0111111)"/>
                </pattern>
                <image id="image0_61_239" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1klEQVR4nO3dMU6UYRSF4bdS16Cug4qCyoqliJSsUMhU4FIIGLG6ZBIKCwKTyHDu/eY9yV3APJwc8vMnDBhjjDHGTMon4BzYAPdABe8v8BM4YrF8BX6FceuZ+wN8Y6Emd0Su1bDPG2DWIWBvGkDWIWDfNUCsf+73qtjV7I5f+eE/AKcMTDU7VsXuCL0kdlfo5bA7Qy+F3R16GewJ0EtgT4Eejz0JejT2NOix2BOhR2JPhR6HPRl6FPZ06DHYK0Bvc7LDn1ij7yCr2X3eI/b2hW8s1ewu/vPzvIS9fbseSxq2nsG42GOzY6kDu1jSH7yEzqOUjSYO5nTQ+9xohI630EaTh3M6yKO60Qgdb1zZaOJITgd5QDeaXucDC0LHW2ijycM5HeRR3WiEjjeubDRxJKeDPKAbTa/zgQWh4y200eThnA7yqG40QscbVzaaOJLTQR7QjabX+cCC0PEW2mjycE4HeVQ3GqHjjSsbTRzJ6SAP6EbT63xgQeh4C200eTingzyqG43Q8caVjSaONHo6uv3r+drj3Sahp3yZQr3BXSWhfzQAqHe670noj8BNA4Ta810DH2jwFU43iyN/oUm2zT572rEVfkHeAZdPcxFvsjHGGGMMO+cRmCCZHHOX0F8AAAAASUVORK5CYII="/>
                </defs>
                </svg>

        </div>
        <p class="file-name" data-file-id="" data-file-name=""></p>   
    </div>

    <div class="subwrapper-2 subwrapper">
        <div id="download-svg-wrapper">
            <div class="svg-wrapper">
                <svg id="download-svg" class="web-component-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="36" height="36" fill="url(#pattern0_94_384)"/>
                    <defs>
                    <pattern id="pattern0_94_384" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_94_384" transform="scale(0.0111111)"/>
                    </pattern>
                    <image id="image0_94_384" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEYUlEQVR4nO2dTY9URRSGn2TAwWBw6QyQoAH/gMoKDYQAHRZEXIjJIEZB3GAiamDGnTuBFZmEvwGICwj+AAmBjMCGjYaFaARmwJXdyTBlyhyTsdN1u6en6lTd2+dJTtLpj3vPeVO3Pk9Vg2EYhmEYhmEYhjEwY8B24BhwDrgM3AV+ARaAjtiCvHdXvnNWfvOWXMPowWbgJPAD8BfgVmnPgCvAF8AmRpwXgSPAj8DzCOKGbBG4DnwIrGOEeElK2sOE4obsEfAt8DINZi1wCpjPIHC3eR++Fp8axTvAvQIE7rb7wB4agK8TLwBLBYgaMu/bLDBOTXkVuFGAkG5Auw1so2bsidRNc8rmu4W7qQnvAX8XIJob0vxg6AMK57PEfWKnZD6G4xTKQRkc5BbJRRT7EIXh67V2AeK4BNXIPgrh9Zo2fG4FDeTW3CKPS7fINdxu5e5nX1AMtg2cBjaKTcujrXV/P6jJwk7lEd/pHj5MK97fx/q2tshrgDuKQTpgsocfE8o+3NOeiDqlHKCr8EXbjy8155OfjLDQT0SD5GjWi65AoZ3MZSef9vzdhOYPWYpLxkeZRHYVPuXyZyql0H4h1YTmXw2uphJ5U+ZJoxA5J52SpDKczBiUq/Arp0+fpxDaJ7eY0PxPg4uxRfYpVk9NaLoL2tPY6WfbM5dmV+Fbbr/ejCn0pwUEFCK3X58QkXMFBBQit1/fEZHvCwgohGtSg6g9JepqJPRcTKEfFBBQiNx+/UpESsgADZHbr8dERHNtztVMaL+WaUJTM6Gt6kCn6rDGEJ3GMEX3riPLYhNi033SykJUPdLd1++U3r27nMDB6R732V8h9kqEbsu1upkpfcCSYgg+EbhXK5BfHaLXk3Ig8N1XSh+CH1MUOiR2iEFFRlLJYsfxMYVPk870uWd3NRKiX3WxnG8SxPEGERmT9NWYDrYHEGa52CGGuVYsW0ix7/xKgtLQ6fOoL69GQqzkGsUvZSHbimM76lZQGof57L/PU+1GOEECNiZMN+gMUCqHIVVJdqJFVYO+Kq4nctolEDulyEkTaJBjH1wNxG4p7HWcSp3k+LBwsVsKIidPctRKQu8MKbaGyN6+QoH1MjVYmtgtJZHVEtGRRGynYO0Bum+pu3Dd5ru5qpuFflYKrNOnZGuV5CybhZCtYEuZxW4pirwkW/6yMKsUpJOqYUa2wU3Ka8395+fJyLhs33UNt5vAC2Rma4KZPVeQ+dTc1yiEXTU/dcZVtA17KYx3G3gwyvsUyvGGHPWzKDnhRXOw5tVIu8QjfqqO/nlW04ZvFzVjC/BTAeK5Ae1WCUf6rKafPVuDIzPPl9BPjjVcv1OAqN3mfdpBw1gjh4poTLH2s8cyC+d9aizrJcjfMgj8pxzUvYERYh1wGLiWeKCzKAupU6N29HwvJmUD+yXJ/lmtuAtyrRMpUwLqzpjksx0Fzkg20Jz8Fcj8sr8HmZf35uQ7Z2QXq/+t/T2IYRiGYRiGYRgGA/IPd3ssawSM6QwAAAAASUVORK5CYII="/>
                    </defs>
                    </svg>
            </div>
        </div>

        
            <div class="svg-wrapper">
                <svg id="delete-svg" class="web-component-icon"  width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="36" height="36" fill="url(#pattern0_94_385)"/>
                    <defs>
                    <pattern id="pattern0_94_385" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_94_385" transform="scale(0.0111111)"/>
                    </pattern>
                    <image id="image0_94_385" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACNUlEQVR4nO2aS27UUBBFDwz4bYDvfqIM2AkwJWwCiZ9gRSBGYRcwIqAI6IweeoqJgpX+2P3iqrjPka7Ug/Zr+ai6/OwyiIiIiIiIyMbcAl4C34AyMF+7Y+sasobXIwT382rdj+w614CjBqJ/dGvNhjvAu+7EykxzBLwFbkeK/pBARJko9VxDuA78TiCgTJRf3TkrmpmK3rXW8Z5A6gXiTaOdQkma792WM/RiKCIiIjI9ZaZJR7SQomjCZVnRxIu0dZAj6YgWUhRNuCwrmniRtg5yJB3RQoqiCZdlRRMv0tZBjqQjWkhRNOGyrGhOJZwAz4F7XernxQhBiwvWqWsrmlMJVUif/YGyF90xfQ4UzZmkWn0XsQf82UBUrdrHS9a4q2jWit5E9irJlQeK5kxW/XuvYlkbWdYuzvNC0QwS1pc95pgxSce226iTNS3gfBsZ8l23d4xrBfsTVfJsK7oMqOwpKnn2ossWsltLnr3oMkL2ZUjeCdFlgOzLkqzoHoq2dbTHi+FERO84/uH2jvWSvWHZgCkqec9b8O0kL3yoFDdhafWY1AkL0zz4d8LCNKMsJyysnrC0Gs46YeH/iqyy73c52OJ1g/46vm7A1Ug6ooUURRMuy4omXqStgxxJR7SQomjCZVnRxIu0dZAj6ThOIKU0zk8S8jmBmNI4n0jIswRiSuM8ISE3gS8J5JRGOQRukJRHM5F9CDwkObWyn3b97SpdII+Bj127SFvJIiIiIiIiIiIk4C+afpdItrgk2wAAAABJRU5ErkJggg=="/>
                    </defs>
                    </svg>
            </div>
        
    </div>
</div>


<style>

*, *:before, *after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.web-folder-wrapper {
    height: fit-content;
    max-height: fit-content;
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 1vw 0 1vw;
    background: var(--color-grey-1);
    border: 1px  solid var(--color-dark);
    transition: border 0.08s ease-in-out, box-shadow 0.2s ease-in-out;
}

.web-folder-wrapper:hover {
    border: 1px solid var(--color-secondary);
    background-color: var(--color-primary)
    box-shadow: 1px 1px 5px var(--color-grey-2);
    color: var(--color-light);
    
}

.web-folder-wrapper svg {
    width: 100%;
    height: 100%;
}

.svg-wrapper {
    width: 2.4vw;
    height: 2.4vw;
}

.subwrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.subwrapper-1 {
    width: fit-content;
    gap: 1vw;
}

.web-component-icon {
    background-size: cover;
    background-repeat: no-repeat;
    transition: scale 0.2s ease-in-out;
}

.web-component-icon:hover {
    scale: 1.04;
    cursor: pointer;


.file-name {
    margin: 1.832vh;
}
}
</style>


`

class DriveFile extends HTMLElement {
    
    shadowRoot = null;

    constructor() {
        super()

        this.shadowRoot = this.attachShadow({ mode: 'closed' });
        this.shadowRoot.appendChild(Filetemplate.content.cloneNode(true));
        
        
        const deleteSvg = document.querySelector("#delete-svg");
        const downloadSvg = document.querySelector("#delete-svg");



        // Comportamento Download e Delete
        // deleteSvg.addEventListener('click', () => {

        // })

        // downloadSvg.addEventListener('click', () => {
            
        // })
    }
    
    connectedCallback() {
        const fileName = this.getAttribute('data-file-name');
        const fileNameText = this.shadowRoot.querySelector('.file-name');
    
        // Check if element exists before setting content
        if (fileNameText) {
          fileNameText.textContent = fileName;
        } else {
          // Schedule a check for the element with a slight delay
          const self = this;  // Store reference to 'this' for callback
          setTimeout(function() {
            const fileNameText = self.shadowRoot.querySelector('.file-name');
            if (fileNameText) {
              fileNameText.textContent = fileName;
            }
          }, 0);  // Schedule with minimal delay
        }
      }

}
customElements.define('drive-file', DriveFile)