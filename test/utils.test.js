// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { isYes } from '../utils.js';

const test = QUnit.test;

test('this should take in my string and return true if it counts as a yes', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = isYes('yes');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'yes returns true');
    expect.equal(isYes('yeahhh'), true, 'yeahhh returns true');
    expect.equal(isYes('nope'), false, 'nope returns false')
});