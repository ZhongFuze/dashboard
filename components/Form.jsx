import Link from "next/link";

const Form = ({ type, widget, setWidget, submitting, handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="bule_gradient">{type} Widget</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing widget with the world,
        and let your imagination run wild with our platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your Prompt
          </span>
          <textarea
            value={widget.prompt}
            onChange={(e) => setWidget({
              ...widget, prompt: e.target.value
            })}
            placeholder="write your prompt here..."
            required
            className="form_textarea"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tags {` `}
            <span className="font-normal">(#insight, #product, #develop, #idea,#analysis, #graph, #table, #pie, #line, #bar)</span>
          </span>
          <input
            value={widget.tag}
            onChange={(e) => setWidget({
              ...widget, tag: e.target.value
            })}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
            <Link href="/" className="text-gray-500 text-sm">
              Cancel
            </Link>
            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-1.5 text-sm
               bg-primary-orange rounded-full text-white"
            >
              {submitting ? `${type}...`: type}
            </button>
        </div>
      </form>
    </section>
  )
}

export default Form