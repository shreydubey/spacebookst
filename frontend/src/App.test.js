import { getByText, render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';


describe('Testing', function() {
    const { queryByTitle, getByText } = render(<App />);
    describe("<App />", () => {
      it(" Check whether app renders or not?", () => {
        //const { getByText } = render(<App />);
        expect(getByText(/Explore/i)).toBeInTheDocument();
      });
    });

        

    it('Home page loading or not', function () {
        const { queryByTitle, getByText } = render(<Provider store={store}>
                <App />
              </Provider>);
              //Case-1
              fireEvent.click(getByText("Home"));
              expect(getByText(/Recent/i)).toBeInTheDocument();
              });
            
           
    
  
        it('Stats page loading or not', function () {
            const { queryByTitle, getByText } = render(<Provider store={store}>
                <App />
              </Provider>);
                  //Case-1
                  fireEvent.click(getByText("Stats"));
                  expect(getByText(/Launch Record For Various Countries/i)).toBeInTheDocument();
                  });
                
                 
                  
    
        it('Shop page loading or not', function () {
            const { queryByTitle, getByText } = render(<Provider store={store}>
                <App />
              </Provider>);
              //Case-1
              fireEvent.click(getByText("Shop"));
              expect(getByText(/Latest Products/i)).toBeInTheDocument();
              });
            
                     

return
});
