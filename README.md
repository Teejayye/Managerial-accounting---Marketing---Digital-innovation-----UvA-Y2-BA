# Exam Room: UvA Block 1 study portal

   # Exam Room: UvA Block 1 study portal

   Open the study portal [Here](https://teejayye.github.io/Managerial-accounting---Marketing---Digital-innovation-----UvA-Y2-BA/)

A study site for three courses:

- **Digital Innovation and Entrepreneurship**
- **Marketing in a Global Business World**
- **Management Accounting 1 for Business**

Each course has:

- an overview;
- a searchable summary with a glossary;
- practice questions that explain every answer option;
- past and mock exams that give you a grade at the end.

It's a plain static website, so it needs no build step and no server.

## Put it on GitHub Pages

1. Create a new repository on GitHub (for example `exam-room`).
2. Upload **everything in this folder**, keeping the folder structure: `index.html`, `README.md`, `.nojekyll`, `assets/` and `data/`.
   - On github.com: *Add file → Upload files*, then drag the folder contents in.
3. Go to *Settings → Pages*. Under *Build and deployment* choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
4. After a minute your site is live at `https://<your-username>.github.io/exam-room/`. Share that link with friends.

You can also just double-click `index.html` to use it offline.

## Good to know

- **Progress is saved per browser** (localStorage): practice results, saved questions, exam attempts and drafts. Friends each have their own progress. Clearing browser data resets it.
- **Set your exam dates** on the home page. The countdown uses them.
- **Light/dark mode**: use the button at the top right.
- Calculation answers accept `51800`, `51,800` or `51.800`. For variances, the amount is checked and the solution says whether it is F or U.
- Open exam questions are **self-marked** (full, half or no points) against the official grading instructions. The grade updates as you mark.

## Editing content

All content is in `data/`:

| File | Contents |
|---|---|
| `die.js`, `die-q.js` | DIE summary, glossary, practice questions, mock exam |
| `mkt.js`, `mkt-q.js`, `mkt-exams.js` | Marketing summary, practice, past exams (2012, 2013) |
| `ma.js`, `ma-q.js`, `ma-exams.js` | Management Accounting summary, practice, finals 2021 & 2023, midterms |

Question formats:

- **Multiple choice:**
  ```js
  { id, topic, q, o: [...4 options], a: indexOfCorrect, w: [...why each option is right/wrong] }
  ```
- **Calculation:**
  ```js
  { t: "num", q, a: number | [accepted answers], show, sol }
  ```
- **Open:**
  ```js
  { t: "open", q, model }
  ```

To add a new exam, push an object with `questions`, and either `grading: { type: "guess", guess: n }` or `{ type: "points" }`, via `PORTAL.addExams(courseId, [...])`.

*Built from lecture slides, readings, summaries and past exams. Questions marked "Practice" were written for this portal. Always check Canvas and the course manual for the final word on exam scope.*
