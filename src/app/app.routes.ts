import { Routes } from '@angular/router';
import { IntroExplanationComponent } from './lesson0/explanation.component';
import { lesson1ExplanationComponent } from './lesson1//explanation/explanation.component';
import { lesson1ExamplesComponent } from './lesson1/examples/examples.component';
import { lesson2ExplanationComponent } from './lesson2/explanation/explanation.component';
import { lesson2ExamplesComponent } from './lesson2/examples/examples.component';
import { lesson2ProblemsComponent } from './lesson2/problems/problems.component';
import { lesson3ExplanationComponent } from './lesson3/explanation/explanation.component';
import { lesson3ProblemsComponent } from './lesson3/problems/problems.component';
import { lesson3ExamplesComponent } from './lesson3/examples/examples.component';
import { lesson4ExplanationComponent } from './lesson4/explanation/explanation.component';
import { lesson4ExamplesComponent } from './lesson4/examples/examples.component';
import { lesson4ProblemsComponent } from './lesson4/problems/problems.component';
import { lesson5ExamplesComponent } from './lesson5/examples/examples.component';
import { lesson5ExplanationComponent } from './lesson5/explanation/explanation.component';
import { lesson6ExplanationComponent } from './lesson6/explanation/explanation.component';
import { lesson6ExamplesComponent } from './lesson6/examples/examples.component';
import { lesson7ExamplesComponent } from './lesson7/examples/examples.component';
import { lesson7ExplanationComponent } from './lesson7/explanation/explanation.component';
import { lesson8ExplanationComponent } from './lesson8/explanation/explanation.component';
import { lesson8ExampleComponent } from './lesson8/example/example.component';
import { lesson9ExplanationComponent } from './lesson9/explanation/explanation.component';
import { lesson9ExampleComponent } from './lesson9/example/example.component';
import { lesson5ProblemsComponent } from './lesson5/problems/problems.component';
import { lesson6ProblemsComponent } from './lesson6/problems/problems.component';
import { lesson7ProblemsComponent } from './lesson7/problems/problems.component';
import { lesson8ProblemComponent } from './lesson8/problem/problem.component';
import { lesson9ProblemComponent } from './lesson9/problem/problem.component';
import { QuizComponent } from './quiz/quiz.component';
import { lesson1ProblemComponent } from './lesson1/problem/problem.component';


export const routes: Routes = [
    { path: 'les1-exp', component: lesson1ExplanationComponent },
    { path: 'les1-exam', component: lesson1ExamplesComponent },
    { path: 'les1-prob', component: lesson1ProblemComponent },
    { path: 'les2-exp', component: lesson2ExplanationComponent },
    { path: 'les2-exam', component: lesson2ExamplesComponent },
    { path: 'les2-prob', component: lesson2ProblemsComponent },
    { path: 'les3-exp', component: lesson3ExplanationComponent },
    { path: 'les3-exam', component: lesson3ExamplesComponent },
    { path: 'les3-prob', component: lesson3ProblemsComponent },
    { path: 'les4-exp', component: lesson4ExplanationComponent },
    { path: 'les4-exam', component: lesson4ExamplesComponent },
    { path: 'les4-prob', component: lesson4ProblemsComponent },
    { path: 'les5-exam', component: lesson5ExamplesComponent },
    { path: 'les5-exp', component: lesson5ExplanationComponent },
    { path: 'les5-prob', component: lesson5ProblemsComponent },
    { path: 'les6-exp', component: lesson6ExplanationComponent },
    { path: 'les6-prob', component: lesson6ProblemsComponent },
    { path: 'les6-exam', component: lesson6ExamplesComponent },
    { path: 'les7-exam', component: lesson7ExamplesComponent },
    { path: 'les7-exp', component: lesson7ExplanationComponent },
    { path: 'les7-prob', component: lesson7ProblemsComponent },
    { path: 'les8-exp', component: lesson8ExplanationComponent },
    { path: 'les8-exam', component: lesson8ExampleComponent },
    { path: 'les8-prob', component: lesson8ProblemComponent },
    { path: 'les9-exp', component: lesson9ExplanationComponent },
    { path: 'les9-exam', component: lesson9ExampleComponent },
    { path: 'les9-prob', component: lesson9ProblemComponent },
    { path: 'intro', component: IntroExplanationComponent },
    { path: 'quiz/:lessonId', component: QuizComponent },
    { path: '', component: IntroExplanationComponent },
    { path: '**', component: IntroExplanationComponent },

];
