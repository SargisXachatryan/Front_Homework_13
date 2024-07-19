import { handleAdd } from "@/app/lib/actions/actions";
import { PickImages } from "@/app/lib/components/PickImages";

export default function AddPage() {
    return <>
        <h1 className="is-size-4">Add Lectures</h1>
        <div className="columns">
            <div className="column is-two-fifths">
                <form className="box my-5" action={handleAdd}>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="enter a name"
                            className="input is-dark"
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="surname"
                            placeholder="enter a surname"
                            className="input is-dark"
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="number"
                            name="age"
                            placeholder="enter a age"
                            className="input is-dark"
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="string"
                            name="profession"
                            placeholder="enter a profession"
                            className="input is-dark"
                        />
                    </div>
                    <div className="field my-4">
                        <PickImages />
                    </div>

                    <div className="field my-4">
                        <button className="button is-danger">submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}