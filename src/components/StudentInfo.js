import { Grid } from '@mui/material'
import { FormInput } from './common/Input'
import FileUpload from './common/FileUpload'

const StudentInfo = ({ post, setPost }) => {
    return (
        <>
            <Grid item xs={4} />
            <Grid item xs={4}>
                <center>
                    <FileUpload
                        header="Öğrenci Fotoğrafı"
                    />
                </center>
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={12} sm={12}>
                <FormInput
                    type='text'
                    placeholder='İsim'
                    value={post.studentName}
                    onChange={(e) => {
                        setPost({ ...post, studentName: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormInput
                    type='number'
                    placeholder='Öğrenci No'
                    value={post.studentNo}
                    onChange={(e) => {
                        setPost({ ...post, studentNo: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormInput
                    type='text'
                    placeholder='Bölüm Adı'
                    value={post.studentDepartment}
                    onChange={(e) => {
                        setPost({ ...post, studentDepartment: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormInput
                    type='text'
                    placeholder='Program/Sınıf'
                    value={post.studentClass}
                    onChange={(e) => {
                        setPost({ ...post, studentClass: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormInput
                    type='number'
                    placeholder='T.C Kimlik No:'
                    value={post.studentTcNo}
                    onChange={(e) => {
                        setPost({ ...post, studentTcNo: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormInput
                    type='email'
                    placeholder='E-posta'
                    value={post.studentMail}
                    onChange={(e) => {
                        setPost({ ...post, studentMail: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormInput
                    type='number'
                    placeholder='Telefon No:'
                    value={post.studentGsmNo}
                    onChange={(e) => {
                        setPost({ ...post, studentGsmNo: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <center>
                    <fieldset className="signupModalRadio">
                        <input
                            type="radio"
                            id="staj1"
                            name="staj"
                            value="Staj1"
                        />
                        <label htmlFor="staj1">Staj 1</label>
                        <br />
                        <input
                            type="radio"
                            id="staj2"
                            name="staj"
                            value="Staj2"
                        />
                        <label htmlFor="staj2">Staj 2</label>
                    </fieldset>
                </center>
            </Grid>
        </>
    )
}

export default StudentInfo