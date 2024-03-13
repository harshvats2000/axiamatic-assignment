import { useState } from "react";
import "./App.css";
import Select from "react-select";

const data = [
  {
    value: "notion",
    label: "Notion",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
  },
  {
    value: "jira",
    label: "Jira",
    icon: "https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png"
  },
  {
    value: "slack",
    label: "Slack",
    icon: "https://previews.us-east-1.widencdn.net/preview/48045879/assets/asset-view/0cece34e-cbb7-4c6f-be3e-d475baeb3a8d/thumbnail/eyJ3Ijo0ODAsImgiOjQ4MCwic2NvcGUiOiJhcHAifQ==?Expires=1710327600&Signature=k44qsKjG0Q5pQdyXXTCTQLbYC~ImxFUPXi3vSgq4O6pyRLx7SJG1LhJqgbqkgGnuF7yLodi3zcxU3UGbEb-1WkeVZuxlGkRl2Pb2VrdSJXEj4xUVxbt7jbUHFJA9Xa07M3Ap3TmnlwzIOfwfSlnYPn0dH8NG0lSx7mVjQGRuEQ4A0tFmlUDnTNU~cIVenvuVzUB8~mQ5yWYH3wXCFzevHq05QLLS01BfDdRQNKh1Umsmq2WU72xiIHXNprZpSPuMFydx4h6z~RQVyRbNUBcGAbOeLE~HJUJ68fbizTriWmvhjz184ZKGlKv1-SYL50f5xsPXNAjcqXB~BZfpfUZKJg__&Key-Pair-Id=APKAJM7FVRD2EPOYUXBQ"
  },
  {
    value: "azure",
    label: "Azure",
    icon: "https://cdn.icon-icons.com/icons2/2699/PNG/512/microsoft_azure_logo_icon_170956.png"
  }
];

const NUMBER_OF_PRODUCTS_TO_ADD = 4;

const dot = () => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    // backgroundColor: color,
    borderRadius: 10,
    content: `url(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/></svg>)`,
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10
  }
});

function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const numberOfSelectedProducts = selectedOptions.length;

  return (
    <div className="px-4">
      <div className="max-w-6xl mx-auto py-16">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-3xl">axiamatic</h1>

          <p className="underline text-sm text-gray-400">Exit Setup</p>
        </div>

        <div className="flex items-center justify-between mt-24 px-4 max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-between">
            <div className="cards">
              {[...Array(NUMBER_OF_PRODUCTS_TO_ADD)].map((el, i) => {
                if (i < numberOfSelectedProducts) {
                  const product = selectedOptions[i];
                  return (
                    <div className="product-card">
                      <img src={product.icon} alt={product.label} style={{ width: 48 }} />
                      <p className="mt-3">{product.label}</p>

                      <button
                        className="remove-btn flex items-center text-xs text-gray-400"
                        onClick={() => setSelectedOptions(selectedOptions.filter((op) => op.value !== product.value))}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="red"
                          viewBox="0 0 16 16"
                          strokeWidth={1}
                          stroke="red"
                        >
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                        Remove
                      </button>
                    </div>
                  );
                } else {
                  return (
                    <div className="empty-card">
                      <div
                        className="flex items-center justify-center p-4 rounded"
                        style={{ backgroundColor: "#F9FAFC", border: "1px solid rgb(245, 245, 245)" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#b0bed6"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                          />
                        </svg>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            <p className="text-gray-400 mt-8 text-sm">{numberOfSelectedProducts} Products added</p>
          </div>

          <div className="max-w-md mr-0 px-4">
            <p
              style={{
                background: "linear-gradient(45deg, #606EFF, #CC64FF)",
                width: "fit-content",
                padding: "4px 10px",
                borderRadius: 4,
                color: "white"
              }}
              className="text-sm"
            >
              1 of 3
            </p>
            <h2 className="font-bold my-4 text-3xl">Let&apos;s add your internal tools</h2>
            <p className="text-gray-600">
              Search to quickly add products your team uses today.
              <br />
              You&apos;ll be able to add as many as you need later but for now let&apos;s add four.
            </p>

            <div className="mt-8">
              <Select
                isDisabled={numberOfSelectedProducts === NUMBER_OF_PRODUCTS_TO_ADD}
                name="products"
                options={data}
                placeholder={<div className="">Search for any software...</div>}
                isSearchable
                isClearable={false}
                isMulti
                controlShouldRenderValue={false}
                hideSelectedOptions={false}
                components={{
                  Option: (el) => CustomOption({ ...el, selectedOptions }),
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null
                }}
                value={selectedOptions}
                onChange={(e) => setSelectedOptions(e)}
                styles={{
                  control: (styles) => ({
                    ...styles,
                    borderRadius: 4,
                    borderColor: "rgba(0, 0, 0, 0.1)"
                  }),

                  valueContainer: (styles) => ({
                    ...styles,
                    paddingTop: 5,
                    paddingBottom: 5
                  }),
                  input: (styles) => ({ ...styles, ...dot() }),
                  placeholder: (styles) => ({ ...styles, ...dot("#ccc") })
                }}
              />

              <button className="next-btn" disabled={numberOfSelectedProducts !== NUMBER_OF_PRODUCTS_TO_ADD}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CustomOption = ({ innerProps, label, value, data, selectedOptions }) => {
  const isSelected = !!selectedOptions.find((option) => option.value === value);

  return (
    <div
      {...innerProps}
      className={`flex items-center justify-between py-1 px-2 mx-2 my-1 rounded`}
      style={{
        background: isSelected ? "#4B6FFF" : "transparent",
        color: isSelected ? "white" : "black"
      }}
    >
      <div className="flex items-center">
        <img src={data.icon} alt={label} style={{ marginRight: "8px", width: 20 }} />
        <p>{label}</p>
      </div>

      {isSelected && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-check"
          viewBox="0 0 16 16"
        >
          <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
        </svg>
      )}
    </div>
  );
};

export default App;
