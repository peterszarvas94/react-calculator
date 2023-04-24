import { useReducer } from 'react';
import Button from './components/Button';
import { formatNumber } from './functions/formatNumber';
import { reducer } from './functions/reducer';
import { AiFillGithub } from 'react-icons/ai';

function App() {

  const [{ current, previous, operation, memory }, dispatch] = useReducer(
    reducer,
    {
      memory: '',
      current: '',
      previous: '',
      operation: '',
      overwrite: false
    }
  );

  function renderDisplay(num: string) {
    const parsed = parseFloat(num);
    const formatted = isNaN(parsed) ? '0' : formatNumber(parsed);
    return formatted;
  }

  function renderCalculation(num?: string, op?: string) {
    if (!num || !op) {
      return '';
    }
    return `${renderDisplay(num)} ${op}`;
  }

  return (
    <main className="bg-gradient-to-br from-sky-300 to-emerald-200 h-screen w-screen pt-10">
      <div className="
        w-fit h-fit mx-auto grid grid-cols-4 grid-rows-5 
        divide-x divide-y divide-gray-200
        rounded-2xl shadow-lg
      ">
        <div className="w-64 h-16 col-span-4 ">

          <div
            className="
              w-64 h-7 text-right px-4 rounded-t-2xl bg-gray-800 text-gray-400 font-mono
              flex items-center justify-end
            "
          >
            {renderCalculation(previous, operation)}
          </div>
          <div
            className="w-64 h-9 text-right text-lg px-4 bg-gray-800 text-white font-mono"
          >
            {renderDisplay(current)}
          </div>
        </div>

        <Button
          bg="bg-gray-100"
          onClick={() => { dispatch({ type: 'memory-read' }) }}
        >
          MR
        </Button>
        <Button
          bg="bg-gray-100"
          onClick={() => { dispatch({ type: 'memory-write' }) }}
        >
          MW
        </Button>
        <Button
          bg="bg-gray-100"
          onClick={() => dispatch({ type: 'memory-clear' })}
        >
          MC
        </Button>
        <Button
          bg="bg-gray-600 text-white"
          onClick={() => dispatch({ type: 'choose-operation', payload: { operation: '/' } })}
        >
          &divide;
        </Button>

        <Button onClick={() => dispatch({ type: 'add-digit', payload: { digit: '7' } })}>7</Button>
        <Button onClick={() => dispatch({ type: 'add-digit', payload: { digit: '8' } })}>8</Button>
        <Button onClick={() => dispatch({ type: 'add-digit', payload: { digit: '9' } })}>9</Button>
        <Button
          bg="bg-gray-600 text-white"
          onClick={() => dispatch({ type: 'choose-operation', payload: { operation: '*' } })}
        >
          &times;
        </Button>

        <Button onClick={() => dispatch({ type: 'add-digit', payload: { digit: '4' } })}>4</Button>
        <Button onClick={() => dispatch({ type: 'add-digit', payload: { digit: '5' } })}>5</Button>
        <Button onClick={() => dispatch({ type: 'add-digit', payload: { digit: '6' } })}>6</Button>
        <Button
          bg="bg-gray-600 text-white"
          onClick={() => dispatch({ type: 'choose-operation', payload: { operation: '-' } })}
        >
          &ndash;
        </Button>

        <Button onClick={() => dispatch({ type: 'add-digit', payload: { digit: '1' } })}>1</Button>
        <Button onClick={() => dispatch({ type: 'add-digit', payload: { digit: '2' } })}>2</Button>
        <Button onClick={() => dispatch({ type: 'add-digit', payload: { digit: '3' } })}>3</Button>
        <Button
          bg="bg-gray-600 text-white"
          onClick={() => dispatch({ type: 'choose-operation', payload: { operation: '+' } })}
        >
          +
        </Button>

        <Button
          rounded="rounded-bl-2xl"
          onClick={() => dispatch({ type: 'clear' })}
        >
          AC
        </Button>
        <Button onClick={() => dispatch({ type: 'add-digit', payload: { digit: '0' } })} >0</Button>
        <Button onClick={() => dispatch({ type: 'add-digit', payload: { digit: '.' } })} >&#x2022;</Button>
        <Button
          rounded="rounded-br-2xl"
          bg="bg-orange-600 text-white"
          onClick={() => dispatch({ type: 'evaluate' })}
        >
          =
        </Button>
      </div>

      <div className="pt-10 w-64 mx-auto">
        <div>Current memory:</div>
        <div className="font-mono">{renderDisplay(memory)}</div>
      </div>

      <div className="pt-10 w-64 mx-auto text-sm font-mono">
        <div>MR - Memory Read</div>
        <div>MW - Memory Write </div>
        <div>MC - Memory Clear</div>
        <div>AC - All Clear</div>
      </div>

      <div className="pt-10 w-64 mx-auto text-xs text-gray-500">
        <div>All rights reserved</div>
        <div>&copy; 2023 Péter Szarvas</div>
        <a
          href="https://peterszarvas.hu/"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:underline"
        >
          peterszarvas.hu
        </a>
        <a
          href="https://github.com/peterszarvas94/calculator"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline flex items-center justify-start gap-1"
        >
          <AiFillGithub className="inline" />
          <span>GitHub</span>
        </a>
      </div>
    </main >
  )
}

export default App
