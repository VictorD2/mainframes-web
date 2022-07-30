import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';

// Icons
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

// Types
type AppSelectProps = {
  name: string;
  label?: string;
  labelColor?: string;
  items: Array<string>;
  selected: string;
  height?: string;
  onChange: Function;
  helpText?: string;
  helpColor?: string;
  width?: string;
};

export default function AppSelect({ width = 'w-full', helpText, name, items, label, labelColor = 'text-gray-700', helpColor = 'text-red-500', selected, onChange, height = 'h-10' }: AppSelectProps) {
  const classNames = (...classes: any): string => {
    return classes.filter(Boolean).join(' ');
  };
  return (
    <div className={`flex flex-col items-start ${width}`}>
      {label && (
        <div className="my-2">
          <label htmlFor={name} className={'block text-xs font-medium ' + labelColor + '  mt-1'}>
            {label}
          </label>
        </div>
      )}
      <Listbox value={selected} onChange={(e) => onChange(e)}>
        {({ open }) => (
          <>
            <div className={`relative block w-full ${helpText ? helpColor : ''}`}>
              <Listbox.Button
                className={classNames(
                  'bg-background relative app-row  w-full border-2 border-transparent rounded-md shadow-sm pl-3 pr-10 items-center text-left cursor-default focus:outline-none sm:text-sm',
                  height
                )}
              >
                <span className="block truncate">{selected}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>

              <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {items.map((item: any, i) => (
                    <Listbox.Option
                      key={i}
                      className={({ active }) => classNames(active ? 'text-white bg-primary' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9')}
                      value={item}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="app-row items-center">
                            <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>{item}</span>
                          </div>
                          {selected ? (
                            <span className={classNames(active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4')}>
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
      {helpText && <div className={classNames(helpColor, 'caption mt-1')}>{helpText}</div>}
    </div>
  );
}
