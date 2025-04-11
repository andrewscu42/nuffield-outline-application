// src/App.test.jsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

jest.mock('./components/ProjectInformation', () => () => <div data-testid="project-information">Project Information</div>);
jest.mock('./components/PrincipalInvestigator', () => () => <div data-testid="principal-investigator">Principal Investigator</div>);
jest.mock('./components/ResearchQuestions', () => () => <div data-testid="research-questions">Research Questions</div>);
jest.mock('./components/SignaturePage', () => () => <div data-testid="signature-page">Signature Page</div>);

test('loads and renders all components', async () => {
    render(<App />);

    await waitFor(() => {
        expect(screen.getByTestId('project-information')).toBeInTheDocument();
        expect(screen.getByTestId('principal-investigator')).toBeInTheDocument();
        expect(screen.getByTestId('research-questions')).toBeInTheDocument();
        expect(screen.getByTestId('signature-page')).toBeInTheDocument();
    });
});