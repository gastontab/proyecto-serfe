<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Evaluation;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        //codigo para agregar usuarios en la BD al iniciar el proyecto
        $user = new User();
        $user->username = "gaston";
        $user->email = "gtaborda1@gmail.com";
        $user->password = "12345";
        $user->tipoUser = "Student";
        $user->save();

        $user2 = new User();
        $user2->username = "Roger";
        $user2->email = "rfederer@hotmail.com";
        $user2->password = "1234543";
        $user2->tipoUser = "Teacher";
        $user2->save();

        $user3 = new User();
        $user3->username = "leomessi";
        $user3->email = "leomessi@gmail.com";
        $user3->password = "12795";
        $user3->tipoUser = "Teacher";
        $user3->save();

        $user4 = new User();
        $user4->username = "novak";
        $user4->email = "djoker@gmail.com";
        $user4->password = "134245";
        $user4->tipoUser = "Student";
        $user4->save();

        $user5 = new User();
        $user5->username = "jose";
        $user5->email = "joseperez@gmail.com";
        $user5->password = "13rhr5";
        $user5->tipoUser = "Student";
        $user5->save();

        $user6 = new User();
        $user6->username = "sampras";
        $user6->email = "psampras@yahoo.com";
        $user6->password = "109545";
        $user6->tipoUser = "Student";
        $user6->save();

        $user7 = new User();
        $user7->username = "carlos";
        $user7->email = "carlos214@gmail.com";
        $user7->password = "13lohg5";
        $user7->tipoUser = "Student";
        $user7->save();

        $user8 = new User();
        $user8->username = "rafanadal";
        $user8->email = "rafaelnadal@hotmail.com";
        $user8->password = "13rafa5";
        $user8->tipoUser = "Student";
        $user8->save();

        $user9 = new User();
        $user9->username = "marcelo";
        $user9->email = "mg2020@hotmail.com";
        $user9->password = "1erer543";
        $user9->tipoUser = "Teacher";
        $user9->save();

        $user10 = new User();
        $user10->username = "gastontab";
        $user10->email = "gastont8@gmail.com";
        $user10->password = "127sff95";
        $user10->tipoUser = "Teacher";
        $user10->save();

        $user11 = new User();
        $user11->username = "andrea";
        $user11->email = "andy456@serfe.com";
        $user11->password = "179iiu543";
        $user11->tipoUser = "Teacher";
        $user11->save();

        $user12 = new User();
        $user12->username = "julia";
        $user12->email = "julip@serfe.com";
        $user12->password = "127fd395";
        $user12->tipoUser = "Teacher";
        $user12->save();

        //codigo para agregar notas en la BD a la tabla evaluation

        $evaluation = new Evaluation();
        $evaluation->emailTeacher = "rfederer@hotmail.com";
        $evaluation->emailStudent = "psampras@yahoo.com";
        $evaluation->score = 9.5;
        $evaluation->save();

        $evaluation1 = new Evaluation();
        $evaluation1->emailTeacher = "gastont8@gmail.com";
        $evaluation1->emailStudent = "joseperez@gmail.com";
        $evaluation1->score = 10;
        $evaluation1->save();

        $evaluation2 = new Evaluation();
        $evaluation2->emailTeacher = "andy456@serfe.com";
        $evaluation2->emailStudent = "carlos214@gmail.com";
        $evaluation2->score = 4;
        $evaluation2->save();

        $evaluation3 = new Evaluation();
        $evaluation3->emailTeacher = "rfederer@hotmail.com";
        $evaluation3->emailStudent = "djoker@gmail.com";
        $evaluation3->score = 7.3;
        $evaluation3->save();

        $evaluation4 = new Evaluation();
        $evaluation4->emailTeacher = "gastont8@gmail.com";
        $evaluation4->emailStudent = "djoker@gmail.com";
        $evaluation4->score = 8;
        $evaluation4->save();

        $evaluation5 = new Evaluation();
        $evaluation5->emailTeacher = "rfederer@hotmail.com";
        $evaluation5->emailStudent = "carlos214@gmail.com";
        $evaluation5->score = 2;
        $evaluation5->save();

        $evaluation6 = new Evaluation();
        $evaluation6->emailTeacher = "andy456@serfe.com";
        $evaluation6->emailStudent = "psampras@yahoo.com";
        $evaluation6->score = 4.5;
        $evaluation6->save();

        $evaluation7 = new Evaluation();
        $evaluation7->emailTeacher = "rfederer@hotmail.com";
        $evaluation7->emailStudent = "psampras@yahoo.com";
        $evaluation7->score = 9.5;
        $evaluation7->save();

    }
}
