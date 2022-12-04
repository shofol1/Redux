import React, { useReducer } from "react";
import { initialState, reducer } from "../../State/formReducer";

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleForm = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className="mt-10 sm:mt-0 ">
      <div className="flex items-center justify-center h-[600px]">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form onSubmit={handleForm}>
            <div className="overflow-hidden shadow sm:rounded-md">
              <h1 className="text-center font-bold text-3xl text-indigo-600 p-4 sm:text-1xl">
                Personal Information{" "}
              </h1>
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      autocomplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onBlur={(e) =>
                        dispatch({
                          type: "INPUT",
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      autocomplete="family-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onBlur={(e) =>
                        dispatch({
                          type: "INPUT",
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      for="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      autocomplete="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onBlur={(e) =>
                        dispatch({
                          type: "INPUT",
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      autocomplete="country-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      onClick={(e) =>
                        dispatch({
                          type: "INPUT",
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="Mexico">Mexico</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3 mt-5">
                    <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                      <button
                        data-action="decrement"
                        className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        onClick={() => dispatch({ type: "DECREMENT" })}
                      >
                        <span className="m-auto text-2xl font-thin">−</span>
                      </button>
                      <input
                        type="number"
                        className="outline-none focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
                        name="pcNumber"
                        value={state.pcNumber > 0 ? state.pcNumber : 0}
                      />
                      <button
                        data-action="increment"
                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                        onClick={() => dispatch({ type: "INCREMENT" })}
                      >
                        <span className="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <label
                      for="streetAddress"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Street address
                    </label>
                    <input
                      type="text"
                      name="streetAddress"
                      id="streetAddress"
                      autocomplete="street-address"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onBlur={(e) =>
                        dispatch({
                          type: "INPUT",
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      for="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autocomplete="address-level2"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onBlur={(e) =>
                        dispatch({
                          type: "INPUT",
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      for="region"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State / Province
                    </label>
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autocomplete="address-level1"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onBlur={(e) =>
                        dispatch({
                          type: "INPUT",
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      for="postalCode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      ZIP / Postal code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      id="postalCode"
                      autocomplete="postal-code"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onBlur={(e) =>
                        dispatch({
                          type: "INPUT",
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="ml-5 mb-4">
                <label className="form-check-label inline-block text-gray-800">
                  Gender
                </label>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="gender"
                      value="male"
                      id="male"
                      onClick={(e) =>
                        dispatch({
                          type: "INPUT",
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="male"
                    >
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      onClick={(e) =>
                        dispatch({
                          type: "INPUT",
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="female"
                    >
                      Female
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex ml-6">
                <div className="flex h-5 items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    onClick={() => dispatch({ type: "TOGGLE" })}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label for="candidates" className="font-medium text-gray-700">
                    I agree with the terms and conditions
                  </label>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
